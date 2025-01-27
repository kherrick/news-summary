# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Hedy: Textual Programming Made Easy](https://www.hedy.org/) - Hedy introduces an educational programming language designed for learning coding in a simplified manner. [Comments](https://news.ycombinator.com/item?id=42837636)

* [The Future of Microprocessors](https://www.youtube.com/watch?v=MkbgZMCTUyU) - A cutting-edge presentation explores advancements and challenges in microprocessor design. [Comments](https://lobste.rs/s/pzr5nj/future_microprocessors)

* [Marginalia – A search engine that prioritizes non-commercial content](https://marginalia-search.com/) - A project focusing on niche, non-commercial content aims to provide an alternative take on internet search. [Comments](https://news.ycombinator.com/item?id=42836405)

* [OpenAI launches Operator, an AI agent that can do tasks on the web](https://arstechnica.com/ai/2025/01/openai-launches-operator-an-ai-agent-that-can-operate-your-computer/) - OpenAI unveils a virtual assistant capable of web-based task automation. [Comments](https://lobste.rs/s/fqtxpv/openai_launches_operator_ai_agent_can_do)

## Scientific Discoveries

* [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - Unanticipated cellular structures could revise fundamental biological theories. [Comments](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)

* [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - The antimicrobial properties of oyster blood could open new avenues in medicine. [Comments](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss)

## Cybersecurity and Privacy

* [Purelymail: Cheap, no-nonsense email](https://purelymail.com/) - A straightforward and privacy-respecting email service. [Comments](https://news.ycombinator.com/item?id=42836818)

* [The protester's guide to smartphone security](https://www.privacyguides.org/articles/2025/01/23/activists-guide-securing-your-smartphone/) - Privacy tips for activists aiming to secure their devices. [Comments](https://news.ycombinator.com/item?id=42829317)

## AI and Software Development

* [Anthropic Chief Says AI Could Surpass 'Almost All Humans at Almost Everything' Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - Insights from the CEO of Anthropic on the future trajectory of artificial intelligence. [Comments](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)

* [When AI Promises Speed but Delivers Debugging Hell](https://nsavage.substack.com/p/when-ai-promises-speed-but-delivers) - Reflecting on the pitfalls of AI's promises versus the reality of debugging challenges. [Comments](https://lobste.rs/s/tz23of/when_ai_promises_speed_delivers)

## Surprising and Unique Events

* [Astronomers delete asteroid because it turned out to be Tesla Roadster](https://www.astronomy.com/science/astronomers-just-deleted-an-asteroid-because-it-turned-out-to-be-elon-musks-tesla-roadster/) - A notable celestial observation error highlights unusual dilemmas in astronomy. [Comments](https://news.ycombinator.com/item?id=42834043)

* [The 'Super Bowl for Nerds': Scenes from the Microsoft Excel World Championship](https://tech.slashdot.org/story/25/01/27/0355223/the-super-bowl-for-nerds-scenes-from-the-microsoft-excel-world-championship?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A quirky insight into competitive Microsoft Excel expertise. [Comments](https://tech.slashdot.org/story/25/01/27/0355223/the-super-bowl-for-nerds-scenes-from-the-microsoft-excel-world-championship?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Infrastructure and Policy

* [Another Undersea Cable Damaged in Baltic Sea. Criminal Sabotage Investigation Launched](https://tech.slashdot.org/story/25/01/27/0140243/another-undersea-cable-damaged-in-baltic-sea-criminal-sabotage-investigation-launched?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Critical undersea infrastructure faces operational risks and suspected sabotage. [Comments](https://tech.slashdot.org/story/25/01/27/0140243/another-undersea-cable-damaged-in-baltic-sea-criminal-sabotage-investigation-launched?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [New Michigan Law Requires High Schools to Offer CS Classes](https://news.slashdot.org/story/25/01/26/1547204/new-michigan-law-requires-high-schools-to-offer-cs-classes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A legislative move to bolster computer science education across Michigan high schools. [Comments](https://news.slashdot.org/story/25/01/26/1547204/new-michigan-law-requires-high-schools-to-offer-cs-classes?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-01-27, 05:56:00](https://hardware.slashdot.org/story/25/01/27/0539219/should-big-tech-plug-its-data-centers-directly-into-power-plants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Should Big Tech Plug Its Data Centers Directly Into Power Plants?](https://hardware.slashdot.org/story/25/01/27/0539219/should-big-tech-plug-its-data-centers-directly-into-power-plants?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 05:11:07](https://news.ycombinator.com/item?id=42837636) - [Hedy: Textual Programming Made Easy](https://www.hedy.org/)
* [2025-01-27, 04:34:40](https://news.ycombinator.com/item?id=42837462) - [If OpenSSL were a GUI (2022)](https://smallstep.com/blog/if-openssl-were-a-gui/)
* [2025-01-27, 04:28:00](https://news.ycombinator.com/item?id=42837423) - [EV maker Canoo, once worth $2.4B, files for bankruptcy](https://www.sfgate.com/tech/article/canoo-ev-maker-goes-bankrupt-20054204.php)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-27, 03:58:00](https://tech.slashdot.org/story/25/01/27/0355223/the-super-bowl-for-nerds-scenes-from-the-microsoft-excel-world-championship?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The 'Super Bowl for Nerds':  Scenes from the Microsoft Excel World Championship ](https://tech.slashdot.org/story/25/01/27/0355223/the-super-bowl-for-nerds-scenes-from-the-microsoft-excel-world-championship?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 03:41:52](https://news.ycombinator.com/item?id=42837181) - [Interview with Andy Yen, CEO of Proton VPN](https://www.compiler.news/proton-vpn-venezuela-russia/)
* [2025-01-27, 03:14:45](https://lobste.rs/s/pzr5nj/future_microprocessors) - [The Future of Microprocessors](https://www.youtube.com/watch?v=MkbgZMCTUyU)
* [2025-01-27, 03:12:30](https://lobste.rs/s/9w75v8/what_re_best_things_you_read_learned_2024) - [What're the Best Things you Read and Learned in 2024?](https://lobste.rs/s/9w75v8/what_re_best_things_you_read_learned_2024)
* [2025-01-27, 02:38:25](https://news.ycombinator.com/item?id=42836818) - [Purelymail: Cheap, no-nonsense email](https://purelymail.com/)
* [2025-01-27, 01:54:24](https://lobste.rs/s/3w9f40/on_dualities) - [On Dualities](http://dicioccio.fr/on-dualities.html)
* [2025-01-27, 01:47:00](https://tech.slashdot.org/story/25/01/27/0140243/another-undersea-cable-damaged-in-baltic-sea-criminal-sabotage-investigation-launched?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Another Undersea Cable Damaged in Baltic Sea. Criminal Sabotage Investigation Launched](https://tech.slashdot.org/story/25/01/27/0140243/another-undersea-cable-damaged-in-baltic-sea-criminal-sabotage-investigation-launched?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 01:39:05](https://news.ycombinator.com/item?id=42836405) - [Marginalia – A search engine that prioritizes non-commercial content](https://marginalia-search.com/)
* [2025-01-27, 00:14:53](https://news.ycombinator.com/item?id=42835798) - [Shunpo: Minimalist bash tool to make directory navigation a little bit faster](https://github.com/egurapha/Shunpo)
* [2025-01-27, 00:11:27](https://news.ycombinator.com/item?id=42835772) - [Openhaystack: Build 'AirTags' – track Bluetooth devices via Apple's network](https://github.com/seemoo-lab/openhaystack)
* [2025-01-27, 00:04:00](https://tech.slashdot.org/story/25/01/26/2316243/a-new-bid-for-tiktok-from-perplexity-ai-would-give-the-us-government-a-50-stake?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [A New Bid for TikTok from Perplexity AI Would Give the US Government a 50% Stake](https://tech.slashdot.org/story/25/01/26/2316243/a-new-bid-for-tiktok-from-perplexity-ai-would-give-the-us-government-a-50-stake?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 23:34:00](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss) - [Florida Man Eats Diet of Butter, Cheese, Beef; Cholesterol Oozes From His Body](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss)
* [2025-01-26, 23:13:01](https://news.ycombinator.com/item?id=42835282) - [Lessons in creating family photos that people want to keep (2018)](https://estherschindler.medium.com/the-old-family-photos-project-lessons-in-creating-family-photos-that-people-want-to-keep-ea3909129943)
* [2025-01-26, 23:04:00](https://tech.slashdot.org/story/25/01/26/231212/biometrics-windmills-and-vhs-tapes-the-winners-of-rest-of-world-international-tech-photo-contest?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Biometrics, Windmills, and VHS tapes:  The Winners of 'Rest of World' International Tech Photo Contest](https://tech.slashdot.org/story/25/01/26/231212/biometrics-windmills-and-vhs-tapes-the-winners-of-rest-of-world-international-tech-photo-contest?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 23:03:10](https://news.ycombinator.com/item?id=42835183) - [Kansas tuberculosis outbreak is America's largest recorded since the 1950s](https://www.cjonline.com/story/news/politics/government/2025/01/24/kansas-tuberculosis-outbreak-is-largest-in-recorded-history-in-u-s/77881467007/)
* [2025-01-26, 22:39:54](https://news.ycombinator.com/item?id=42834953) - [Hyperbound (YC S23) is hiring a Founding Account Executive in SF](https://www.ycombinator.com/companies/hyperbound/jobs/c3NkW7d-founding-full-cycle-account-executive-in-sf)
* [2025-01-26, 22:03:39](https://news.ycombinator.com/item?id=42834648) - [Show HN: DeepSeek My User Agent](https://www.jasonthorsness.com/20)
* [2025-01-26, 21:52:00](https://tech.slashdot.org/story/25/01/26/2150209/bad-week-for-unoccupied-waymo-cars-one-hit-in-fatal-collision-one-vandalized-by-mob?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bad Week for Unoccupied Waymo Cars:  One Hit in Fatal Collision, One Vandalized by Mob](https://tech.slashdot.org/story/25/01/26/2150209/bad-week-for-unoccupied-waymo-cars-one-hit-in-fatal-collision-one-vandalized-by-mob?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 21:35:42](https://lobste.rs/s/zimti0/petrol_embedding_type_safe_sql_api_ocaml) - [Petrol: embedding a type-safe SQL API in OCaml using GADTs](https://kirancodes.me/posts/log-ways-of-sql-in-ocaml.html)
* [2025-01-26, 20:59:16](https://news.ycombinator.com/item?id=42834043) - [Astronomers delete asteroid because it turned out to be Tesla Roadster](https://www.astronomy.com/science/astronomers-just-deleted-an-asteroid-because-it-turned-out-to-be-elon-musks-tesla-roadster/)
* [2025-01-26, 20:46:00](https://tech.slashdot.org/story/25/01/26/2043253/cory-doctorow-asks-can-interoperability-end-enshittification-and-fix-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cory Doctorow Asks: Can Interoperability End 'Enshittification' and Fix Social Media?](https://tech.slashdot.org/story/25/01/26/2043253/cory-doctorow-asks-can-interoperability-end-enshittification-and-fix-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 20:17:38](https://news.ycombinator.com/item?id=42833638) - [Amsterdam Compiler Kit for Cray X-MP](https://github.com/kej715/ack)
* [2025-01-26, 19:50:36](https://lobste.rs/s/w0cuh3/two_bites_data_science_k) - [Two Bites of Data Science in K](https://blog.zdsmith.com/posts/two-bites-of-data-science-in-k.html)
* [2025-01-26, 19:29:16](https://lobste.rs/s/fqtxpv/openai_launches_operator_ai_agent_can_do) - [OpenAI launches Operator, an AI agent that can do tasks on the web](https://arstechnica.com/ai/2025/01/openai-launches-operator-an-ai-agent-that-can-operate-your-computer/)
* [2025-01-26, 19:23:54](https://lobste.rs/s/sz09um/exploit_me_baby_one_more_time_command) - [Exploit Me, Baby, One More Time: Command Injection in Kubernetes Log Query](https://www.akamai.com/blog/security-research/2024-january-kubernetes-log-query-rce-windows)
* [2025-01-26, 19:17:48](https://lobste.rs/s/pvnlp0/noria_fast_web_applications_through) - [noria: Fast web applications through dynamic, partially-stateful dataflow](https://github.com/mit-pdos/noria)
* [2025-01-26, 19:12:11](https://lobste.rs/s/dwulev/elementary_javascript_library_for) - [elementary: a JavaScript library for digital audio signal processing](https://github.com/elemaudio/elementary)
* [2025-01-26, 18:51:00](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss) - [Real Datacenter Emissions Are A Dirty Secret](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss)
* [2025-01-26, 18:43:00](https://hardware.slashdot.org/story/25/01/26/1841249/californias-battery-plant-fire-sparks-call-for-investigation-new-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California's Battery Plant Fire Sparks Call for Investigation, New Regulations](https://hardware.slashdot.org/story/25/01/26/1841249/californias-battery-plant-fire-sparks-call-for-investigation-new-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 17:40:11](https://news.ycombinator.com/item?id=42831927) - [OpenJazz is a free, open-source version of the classic Jazz Jackrabbit games](https://alister.eu/jazz/oj/about.php)
* [2025-01-26, 17:34:00](https://news.slashdot.org/story/25/01/26/1547204/new-michigan-law-requires-high-schools-to-offer-cs-classes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Michigan Law Requires High Schools to Offer CS Classes](https://news.slashdot.org/story/25/01/26/1547204/new-michigan-law-requires-high-schools-to-offer-cs-classes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 17:24:15](https://news.ycombinator.com/item?id=42831769) - [Qwen2.5-1M: Deploy your own Qwen with context length up to 1M tokens](https://qwenlm.github.io/blog/qwen2.5-1m/)
* [2025-01-26, 16:57:52](https://news.ycombinator.com/item?id=42831509) - [Hard numbers in the Wayland vs. X11 input latency discussion](https://mort.coffee/home/wayland-input-latency/)
* [2025-01-26, 16:55:45](https://lobste.rs/s/oxtwre/hard_numbers_wayland_vs_x11_input_latency) - [Hard numbers in the Wayland vs X11 input latency discussion](https://mort.coffee/home/wayland-input-latency/)
* [2025-01-26, 16:34:00](https://linux.slashdot.org/story/25/01/25/2343225/linux-614-brings-some-systems-faster-suspend-and-resume?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Linux 6.14 Brings Some Systems Faster Suspend and Resume](https://linux.slashdot.org/story/25/01/25/2343225/linux-614-brings-some-systems-faster-suspend-and-resume?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 16:33:51](https://news.ycombinator.com/item?id=42831281) - [The Microsoft 365 Copilot launch was a disaster](https://www.zdnet.com/home-and-office/work-life/the-microsoft-365-copilot-launch-was-a-total-disaster/)
* [2025-01-26, 16:26:05](https://lobste.rs/s/tz23of/when_ai_promises_speed_delivers) - [When AI Promises Speed but Delivers Debugging Hell](https://nsavage.substack.com/p/when-ai-promises-speed-but-delivers)
* [2025-01-26, 15:34:00](https://hardware.slashdot.org/story/25/01/25/0119258/europe-made-more-electricity-from-solar-than-coal-in-2024?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Europe Made More Electricity from Solar Than Coal In 2024](https://hardware.slashdot.org/story/25/01/25/0119258/europe-made-more-electricity-from-solar-than-coal-in-2024?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 14:05:15](https://news.ycombinator.com/item?id=42830155) - [No one is disrupting banks – at least not the big ones](https://www.popularfintech.com/p/no-one-is-disrupting-banks)
* [2025-01-26, 12:34:00](https://news.slashdot.org/story/25/01/26/0351245/new-cia-director-touts-low-confidence-assessment-about-covid-lab-leak-theory?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New CIA Director Touts 'Low Confidence' Assessment About Covid Lab Leak Theory](https://news.slashdot.org/story/25/01/26/0351245/new-cia-director-touts-low-confidence-assessment-about-covid-lab-leak-theory?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 11:12:36](https://lobste.rs/s/en0mrm/cs16_css_css_library_based_on_counter) - [cs16.css: CSS library based on Counter Strike 1.6 UI](https://cs16.samke.me/)
* [2025-01-26, 11:04:16](https://news.ycombinator.com/item?id=42829317) - [The protester's guide to smartphone security](https://www.privacyguides.org/articles/2025/01/23/activists-guide-securing-your-smartphone/)
* [2025-01-26, 09:53:59](https://lobste.rs/s/x7lve1/foa_ferris_on_air_experimental_wi_fi_stack) - [FoA: Ferris-on-Air: An experimental Wi-Fi stack for rust on the ESP32](https://github.com/esp32-open-mac/FoA)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 08:58:52](https://lobste.rs/s/mkmtrp/fixing_my_monitor_s_power_button) - [Fixing my monitor's power button](https://www.lkhrs.com/blog/2025/monitor-repair/)
* [2025-01-26, 08:57:51](https://news.ycombinator.com/item?id=42828833) - [Show HN: Bagels – TUI expense tracker](https://github.com/EnhancedJax/Bagels)
* [2025-01-26, 08:34:00](https://news.slashdot.org/story/25/01/25/2311217/fsf-metas-license-for-its-llama-31-ai-model-is-not-a-free-software-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FSF:   Meta's License for Its Llama 3.1 AI Model 'is Not a Free Software License'](https://news.slashdot.org/story/25/01/25/2311217/fsf-metas-license-for-its-llama-31-ai-model-is-not-a-free-software-license?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 07:43:32](https://lobste.rs/s/rp5edn/much_faster_suspend_resume_for_some) - [Much Faster Suspend & Resume For Some Systems With Linux 6.14](https://www.phoronix.com/news/Linux-6.14-ACPI)
* [2025-01-26, 05:04:00](https://news.slashdot.org/story/25/01/26/0249204/bill-gates-began-the-altair-basic-code-in-his-head-while-hiking-as-a-teenager?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bill Gates Began the Altair BASIC Code in His Head While Hiking as a Teenager](https://news.slashdot.org/story/25/01/26/0249204/bill-gates-began-the-altair-basic-code-in-his-head-while-hiking-as-a-teenager?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
* [2025-01-26, 02:34:00](https://tech.slashdot.org/story/25/01/26/0037255/oracle-and-us-investors-including-microsoft-discuss-taking-control-of-tiktok-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Oracle and US Investors (Including Microsoft) Discuss Taking Control of TikTok in the US](https://tech.slashdot.org/story/25/01/26/0037255/oracle-and-us-investors-including-microsoft-discuss-taking-control-of-tiktok-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 02:19:29](https://lobste.rs/s/bmwj0a/exploring_new_go_tool_support_go_1_24) - [Exploring the new \"go tool\" support in Go 1.24](https://blog.howardjohn.info/posts/go-tools-command/)
* [2025-01-26, 00:48:45](https://lobste.rs/s/atihtk/snac2_simple_minimalistic_activitypub) - [snac2 - A simple, minimalistic ActivityPub instance written in portable C](https://codeberg.org/grunfink/snac2)
* [2025-01-26, 00:32:00](https://lobste.rs/s/ciyxdv/engineers_don_t_make_public_squares) - [Engineers don't make public squares. People do](https://cpf.sh/blog/2025/01/25/engineers-dont-make-public-squares-people-do)
* [2025-01-25, 23:53:00](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss) - [Not an Asteroid, Just Elon's Car](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss)
* [2025-01-25, 23:02:37](https://lobste.rs/s/0whmah/supreme_sexp_system_sss_lisp_machine) - [Supreme Sexp System - SSS - a Lisp machine adventure](https://codeberg.org/jjba23/sss)
* [2025-01-25, 22:22:25](https://lobste.rs/s/o2hhjc/what_happened_text_colour) - [What happened to the text colour?](https://lobste.rs/s/o2hhjc/what_happened_text_colour)
* [2025-01-25, 20:26:26](https://lobste.rs/s/j7chkt/invalid_68030_instruction_accidentally) - [The invalid 68030 instruction that accidentally allowed the Mac Classic II to successfully boot up](https://www.downtowndougbrown.com/2025/01/the-invalid-68030-instruction-that-accidentally-allowed-the-mac-classic-ii-to-successfully-boot-up/)
* [2025-01-25, 19:08:00](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss) - [How Many Sexes Are There?](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss)
* [2025-01-25, 18:09:13](https://lobste.rs/s/1vgfey/sdl_3_2_0) - [SDL 3.2.0](https://github.com/libsdl-org/SDL/releases/tag/release-3.2.0)
* [2025-01-25, 17:35:35](https://lobste.rs/s/vmyk7d/composable_sql) - [Composable SQL](https://borretti.me/article/composable-sql)
* [2025-01-25, 15:30:25](https://news.ycombinator.com/item?id=42822162) - [The impact of competition and DeepSeek on Nvidia](https://youtubetranscriptoptimizer.com/blog/05_the_short_case_for_nvda)
* [2025-01-25, 14:38:21](https://lobste.rs/s/qjzguh/fizzbuzz_did_not_get_me_job) - [The fizzbuzz that did not get me the job](https://kranga.notion.site/The-fizzbuzz-that-did-not-get-me-the-job-180e7c22ef3b80c3a386f7f8de720ac7)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 08:23:32](https://lobste.rs/s/isrnzi/life_pro_tip_oracle_linux_is_best_local_vm) - [Life pro tip: Oracle Linux is the best local VM for MacBooks](https://xeiaso.net/notes/2025/k8s-dev-mac-oracle-linux/)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
* [2025-01-24, 23:44:50](https://news.ycombinator.com/item?id=42818047) - [Autodesk partially restores old forum posts](https://forums.autodesk.com/t5/community-announcements/update-on-archiving-idea-boards-and-forums/td-p/13276594)
* [2025-01-24, 19:24:00](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss)
* [2025-01-24, 15:05:11](https://news.ycombinator.com/item?id=42813683) - [Wikenigma – An Encyclopedia of Unknowns](https://wikenigma.org.uk/)
* [2025-01-24, 14:38:00](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss) - [Chinese Salt Typhoon Hackers 1st Spotted on Federal Networks Under Another Name](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss)
* [2025-01-24, 10:59:19](https://news.ycombinator.com/item?id=42812029) - [Supercharge SQLite with Ruby Functions](https://blog.julik.nl/2025/01/supercharge-sqlite-with-ruby-functions)
* [2025-01-24, 09:53:00](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss) - [New California Law Criminalizing AI Generated Child Porn Claims First Arrest](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss)
* [2025-01-24, 05:07:00](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss) - [Time to Check My Tire Pressures...Hand Me That Hammer](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss)
* [2025-01-24, 00:22:00](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss) - [Google Is Now the East India Company of the Internet](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss)
* [2025-01-23, 21:38:27](https://news.ycombinator.com/item?id=42808355) - [Using the most unhinged AVX-512 instruction to make fastest phrase search algo](https://gab-menezes.github.io/2025/01/13/using-the-most-unhinged-avx-512-instruction-to-make-the-fastest-phrase-search-algo.html)
* [2025-01-23, 19:38:00](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss) - [Microsoft To Force Windows 11 24H2 On Home And Pro Users](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss)
* [2025-01-23, 16:46:48](https://news.ycombinator.com/item?id=42805583) - [Dualities in functional programming](http://dicioccio.fr/on-dualities.html)
* [2025-01-23, 14:53:00](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss) - [Mind Control? Scientists Have Discovered How to Use Nanoparticles to Remotely Control Behavior](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss)
* [2025-01-23, 13:35:04](https://news.ycombinator.com/item?id=42803822) - [Show HN: 3D printing giant things with a Python jigsaw generator](https://calbryant.uk/blog/3d-printing-giant-things-with-jigsaw-generator/)
* [2025-01-23, 10:05:00](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss) - [TSMC Reportedly Pauses Production After Earthquake](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss)
* [2025-01-23, 05:22:00](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss) - [Findings Challenge Assumption That AI Will Soon Replace Human Doctors](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss)
* [2025-01-23, 00:35:00](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss) - [Not Sure What Font to Choose? Typography Study Helps Find the Right Type](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss)
