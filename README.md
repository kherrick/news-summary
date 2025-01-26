# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Advancements

* [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - A bold assertion by Anthropic's CEO about the rapid advancements of AI and its potential dominance.

* [Explainer: What's R1 and Everything Else?](https://timkellogg.me/blog/2025/01/25/r1) - A detailed breakdown of an ambiguous technical concept, sparking interest in understanding R1's significance.

* [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL](https://arxiv.org/abs/2501.12948) - A research article exploring refined learning methodologies for advanced reasoning in large language models.

* [AI slop, suspicion, and writing back](https://benjamincongdon.me/blog/2025/01/25/AI-Slop-Suspicion-and-Writing-Back/) - A thought-provoking article about building trust and quality in AI-driven content creation.

## Unique Innovations and Projects

* [I Built an Omni-Directional Ball-Wheeled Bike [video]](https://www.youtube.com/watch?v=ZVFB2g25OkM) - An inventive take on personal transportation technology using omni-directional wheels.

* [Paxo: A DIY Phone](https://paxo.fr/) - A modern project showcasing how to build a DIY phone system with full functionality.

* [FoA: Ferris-on-Air: An experimental Wi-Fi stack for rust on the ESP32](https://github.com/esp32-open-mac/FoA) - An experimental effort to innovate Wi-Fi stacks using Rust programming for ESP32 microcontrollers.

* [snac2 - A simple, minimalistic ActivityPub instance written in portable C](https://codeberg.org/grunfink/snac2) - A lightweight and efficient implementation of ActivityPub for decentralized social networks.

## Education and Policy Developments

* [New Michigan Law Requires High Schools to Offer CS Classes](https://news.slashdot.org/story/25/01/26/1547204/new-michigan-law-requires-high-schools-to-offer-cs-classes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Michigan introduces a forward-looking policy mandating computer science education in high schools.

* [Exploring the new "go tool" support in Go 1.24](https://blog.howardjohn.info/posts/go-tools-command/) - Insights into new features in Go programming tools improving software development workflows.

* [The Protesters' Guide to Smartphone Security](https://www.privacyguides.org/articles/2025/01/23/activists-guide-securing-your-smartphone/) - A practical guide for protest organizers and activists focusing on smartphone security.

## Linux and Open Source Updates

* [Linux 6.14 Brings Some Systems Faster Suspend and Resume](https://linux.slashdot.org/story/25/01/25/2343225/linux-614-brings-some-systems-faster-suspend-and-resume?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The Linux kernel sees improvements in speed and power efficiency for specific systems.

* [FSF: Meta's License for Its Llama 3.1 AI Model 'is Not a Free Software License'](https://news.slashdot.org/story/25/01/25/2311217/fsf-metas-license-for-its-llama-31-ai-model-is-not-a-free-software-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A critique of Meta's licensing approach for its AI models from the Free Software Foundation.

* [Much Faster Suspend & Resume For Some Systems With Linux 6.14](https://www.phoronix.com/news/Linux-6.14-ACPI) - Hardware optimizations aimed at seamless system responsiveness under Linux.

## Historical Insights and Reflections

* [The invalid 68030 instruction that accidentally allowed the Mac Classic II to successfully boot up](https://www.downtowndougbrown.com/2025/01/the-invalid-68030-instruction-that-accidentally-allowed-the-mac-classic-ii-to-successfully-boot-up/) - A fascinating look into a technical quirk that enabled an unexpected historical outcome.

* [Bill Gates Began the Altair BASIC Code in His Head While Hiking as a Teenager](https://news.slashdot.org/story/25/01/26/0249204/bill-gates-began-the-altair-basic-code-in-his-head-while-hiking-as-a-teenager?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A story revealing how one of the first PC programming languages began as a teenager's hiking idea.

* [The South Vietnamese pilot who landed a Cessna on a carrier to save his family (2019)](https://www.historynet.com/maj-buang-lys-daring-feat-to-save-his-family/) - A poignant account of bravery and determination during the Vietnam War.

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

* [2025-01-26, 18:43:00](https://hardware.slashdot.org/story/25/01/26/1841249/californias-battery-plant-fire-sparks-call-for-investigation-new-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California's Battery Plant Fire Sparks Call for Investigation, New Regulations](https://hardware.slashdot.org/story/25/01/26/1841249/californias-battery-plant-fire-sparks-call-for-investigation-new-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 17:49:37](https://news.ycombinator.com/item?id=42832026) - [No Bitcoin ETFs at Vanguard? Here's why](https://corporate.vanguard.com/content/corporatesite/us/en/corp/articles/no-bitcoin-etfs-at-vanguard-heres-why.html)
* [2025-01-26, 17:34:00](https://news.slashdot.org/story/25/01/26/1547204/new-michigan-law-requires-high-schools-to-offer-cs-classes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Michigan Law Requires High Schools to Offer CS Classes](https://news.slashdot.org/story/25/01/26/1547204/new-michigan-law-requires-high-schools-to-offer-cs-classes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 17:01:25](https://news.ycombinator.com/item?id=42831550) - [Reviving a Dead Audio Format: The Return of ZZM](https://nicole.express/2025/zoo-of-zero-motivation.html)
* [2025-01-26, 16:58:54](https://news.ycombinator.com/item?id=42831517) - [Notes on Argentina](https://jorgevelez.substack.com/p/notes-on-argentina)
* [2025-01-26, 16:57:52](https://news.ycombinator.com/item?id=42831509) - [Hard numbers in the Wayland vs. X11 input latency discussion](https://mort.coffee/home/wayland-input-latency/)
* [2025-01-26, 16:55:45](https://lobste.rs/s/oxtwre/hard_numbers_wayland_vs_x11_input_latency) - [Hard numbers in the Wayland vs X11 input latency discussion](https://mort.coffee/home/wayland-input-latency/)
* [2025-01-26, 16:45:27](https://news.ycombinator.com/item?id=42831384) - [Two F-14 fighter jets were diverted to USS Midway](https://theaviationgeekclub.com/that-time-two-f-14-fighter-jets-were-diverted-to-uss-midway-the-carriers-flight-deck-and-infrastructure-could-not-support-regular-operation-of-the-large-heavy-tomcat/)
* [2025-01-26, 16:34:00](https://linux.slashdot.org/story/25/01/25/2343225/linux-614-brings-some-systems-faster-suspend-and-resume?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Linux 6.14 Brings Some Systems Faster Suspend and Resume](https://linux.slashdot.org/story/25/01/25/2343225/linux-614-brings-some-systems-faster-suspend-and-resume?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 16:33:51](https://news.ycombinator.com/item?id=42831281) - [Microsoft 365 Copilot launch was a total disaster](https://www.zdnet.com/home-and-office/work-life/the-microsoft-365-copilot-launch-was-a-total-disaster/)
* [2025-01-26, 16:26:05](https://lobste.rs/s/tz23of/when_ai_promises_speed_delivers) - [When AI Promises Speed but Delivers Debugging Hell](https://nsavage.substack.com/p/when-ai-promises-speed-but-delivers)
* [2025-01-26, 16:10:24](https://news.ycombinator.com/item?id=42831043) - [100 years of Bell Labs [pdf]](https://novitoll.com/posts/2025-1-25/100_years_of_Bell_Labs.pdf)
* [2025-01-26, 15:59:00](https://news.ycombinator.com/item?id=42830923) - [Are Americans' perceptions of the economy and crime broken?](https://www.niemanlab.org/2024/11/are-americans-perceptions-of-the-economy-and-crime-broken/)
* [2025-01-26, 15:34:00](https://hardware.slashdot.org/story/25/01/25/0119258/europe-made-more-electricity-from-solar-than-coal-in-2024?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Europe Made More Electricity from Solar Than Coal In 2024](https://hardware.slashdot.org/story/25/01/25/0119258/europe-made-more-electricity-from-solar-than-coal-in-2024?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 15:26:14](https://news.ycombinator.com/item?id=42830654) - [I Built an Omni-Directional Ball-Wheeled Bike [video]](https://www.youtube.com/watch?v=ZVFB2g25OkM)
* [2025-01-26, 15:24:53](https://news.ycombinator.com/item?id=42830646) - [It's not a crime if we do it with an app](https://pluralistic.net/2025/01/25/potatotrac/#carbo-loading)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 12:34:00](https://news.slashdot.org/story/25/01/26/0351245/new-cia-director-touts-low-confidence-assessment-about-covid-lab-leak-theory?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New CIA Director Touts 'Low Confidence' Assessment About Covid Lab Leak Theory](https://news.slashdot.org/story/25/01/26/0351245/new-cia-director-touts-low-confidence-assessment-about-covid-lab-leak-theory?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 11:12:36](https://lobste.rs/s/en0mrm/cs16_css_css_library_based_on_counter) - [cs16.css: CSS library based on Counter Strike 1.6 UI](https://cs16.samke.me/)
* [2025-01-26, 11:04:16](https://news.ycombinator.com/item?id=42829317) - [The Protesters' Guide to Smartphone Security](https://www.privacyguides.org/articles/2025/01/23/activists-guide-securing-your-smartphone/)
* [2025-01-26, 10:51:43](https://news.ycombinator.com/item?id=42829279) - [Paxo: A DIY Phone](https://paxo.fr/)
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
* [2025-01-25, 21:34:00](https://tech.slashdot.org/story/25/01/25/0534250/pixelfed-creator-crowdfunds-more-capacity-plus-open-source-alternatives-to-tiktok-and-whatsapp?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pixelfed Creator Crowdfunds More Capacity, Plus Open Source Alternatives to TikTok and WhatsApp](https://tech.slashdot.org/story/25/01/25/0534250/pixelfed-creator-crowdfunds-more-capacity-plus-open-source-alternatives-to-tiktok-and-whatsapp?utm_source=rss1.0mainlinkanon&utm_medium=feed)
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
* [2025-01-25, 18:09:13](https://lobste.rs/s/1vgfey/sdl_3_2_0) - [SDL 3.2.0](https://github.com/libsdl-org/SDL/releases/tag/release-3.2.0)
* [2025-01-25, 17:35:35](https://lobste.rs/s/vmyk7d/composable_sql) - [Composable SQL](https://borretti.me/article/composable-sql)
* [2025-01-25, 17:34:00](https://tech.slashdot.org/story/25/01/25/0450205/people-are-hawking-tiktok-loading-phones-for-thousands-on-ebay-facebook?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [People are Hawking TikTok-Loading Phones for Thousands on eBay, Facebook](https://tech.slashdot.org/story/25/01/25/0450205/people-are-hawking-tiktok-loading-phones-for-thousands-on-ebay-facebook?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 16:34:50](https://lobste.rs/s/0kmpkv/updated_freebsd_bhyve_companion_tools) - [Updated FreeBSD Bhyve Companion Tools](https://vermaden.wordpress.com/2024/06/23/freebsd-bhyve-companion-tools/)
* [2025-01-25, 16:33:28](https://lobste.rs/s/zol11z/use_monoids_for_construction) - [Use Monoids for Construction](https://reasonablypolymorphic.com/blog/use-monoids/index.html)
* [2025-01-25, 14:38:21](https://lobste.rs/s/qjzguh/fizzbuzz_did_not_get_me_job) - [The fizzbuzz that did not get me the job](https://kranga.notion.site/The-fizzbuzz-that-did-not-get-me-the-job-180e7c22ef3b80c3a386f7f8de720ac7)
* [2025-01-25, 14:31:45](https://lobste.rs/s/qsytzj/unix_print_driver_fun) - [Unix Print Driver Fun](https://jholloway.dev/posts/print-driver-fun/)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 08:23:32](https://lobste.rs/s/isrnzi/life_pro_tip_oracle_linux_is_best_local_vm) - [Life pro tip: Oracle Linux is the best local VM for MacBooks](https://xeiaso.net/notes/2025/k8s-dev-mac-oracle-linux/)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 03:35:19](https://lobste.rs/s/wzevin/trying_out_zed_after_more_than_decade_vim) - [Trying out Zed after more than a decade of Vim/Neovim](https://sgoel.dev/posts/trying-out-zed-after-more-than-a-decade-of-vim-neovim/)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
* [2025-01-24, 19:24:00](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss)
* [2025-01-24, 16:50:08](https://lobste.rs/s/aheves/webassembly_compiler_fits_tweet) - [A WebAssembly compiler that fits in a tweet](https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet)
* [2025-01-24, 14:38:00](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss) - [Chinese Salt Typhoon Hackers 1st Spotted on Federal Networks Under Another Name](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss)
* [2025-01-24, 14:28:03](https://lobste.rs/s/jvruyj/tilde_my_llvm_alternative) - [Tilde, my LLVM alternative](https://yasserarg.com/tb)
* [2025-01-24, 12:52:35](https://lobste.rs/s/a5vkze/build_it_yourself) - [Build It Yourself](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/)
* [2025-01-24, 10:47:33](https://news.ycombinator.com/item?id=42811992) - [KATRIN's Odyssey](https://www.symmetrymagazine.org/article/march-2007/deconstruction-katrin?language_content_entity=und)
* [2025-01-24, 09:53:00](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss) - [New California Law Criminalizing AI Generated Child Porn Claims First Arrest](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss)
* [2025-01-24, 09:44:08](https://lobste.rs/s/qy04po/google_s_official_url_shortcut_is) - [Google's official URL shortcut is compromised](https://gist.github.com/zachlatta/f86317493654b550c689dc6509973aa4)
* [2025-01-24, 05:07:00](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss) - [Time to Check My Tire Pressures...Hand Me That Hammer](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss)
* [2025-01-24, 00:22:00](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss) - [Google Is Now the East India Company of the Internet](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss)
* [2025-01-23, 21:38:27](https://news.ycombinator.com/item?id=42808355) - [Using the most unhinged AVX-512 instruction to make fastest phrase search algo](https://gab-menezes.github.io/2025/01/13/using-the-most-unhinged-avx-512-instruction-to-make-the-fastest-phrase-search-algo.html)
* [2025-01-23, 19:38:00](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss) - [Microsoft To Force Windows 11 24H2 On Home And Pro Users](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss)
* [2025-01-23, 14:53:00](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss) - [Mind Control? Scientists Have Discovered How to Use Nanoparticles to Remotely Control Behavior](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss)
* [2025-01-23, 10:05:00](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss) - [TSMC Reportedly Pauses Production After Earthquake](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss)
* [2025-01-23, 05:22:00](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss) - [Findings Challenge Assumption That AI Will Soon Replace Human Doctors](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss)
* [2025-01-23, 01:03:02](https://news.ycombinator.com/item?id=42799388) - [Apache Iceberg](https://iceberg.apache.org/)
* [2025-01-23, 00:35:00](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss) - [Not Sure What Font to Choose? Typography Study Helps Find the Right Type](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss)
* [2025-01-22, 19:51:00](https://soylentnews.org/article.pl?sid=25/01/21/1512214&from=rss) - [ISPs Must Offer Cheaper Internet To Low Income Households After Trying To Prevent It](https://soylentnews.org/article.pl?sid=25/01/21/1512214&from=rss)
* [2025-01-22, 15:08:00](https://soylentnews.org/article.pl?sid=25/01/21/159259&from=rss) - [How Unix Spell Ran in 64kB RAM](https://soylentnews.org/article.pl?sid=25/01/21/159259&from=rss)
* [2025-01-22, 12:07:57](https://news.ycombinator.com/item?id=42791874) - [The Hunt for Error -22](https://tweedegolf.nl/en/blog/145/the-hunt-for-error--22)
* [2025-01-22, 09:22:00](https://soylentnews.org/article.pl?sid=25/01/21/1330227&from=rss) - [Reverse-Engineering a Carry-Lookahead Adder in the Pentium](https://soylentnews.org/article.pl?sid=25/01/21/1330227&from=rss)
* [2025-01-22, 04:37:00](https://soylentnews.org/article.pl?sid=25/01/21/1329212&from=rss) - [China to Pit 12,000 Humans Against Robots in World's First AI Marathon Race](https://soylentnews.org/article.pl?sid=25/01/21/1329212&from=rss)
