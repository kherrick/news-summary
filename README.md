# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence & Technology

* [OpenAI, Google, and Microsoft Back Bill to Fund 'AI Literacy' in Schools](https://www.404media.co/literacy-in-future-technologies-artificial-intelligence-act-adam-schiff-mike-rounds/) ([comments](https://news.ycombinator.com/item?id=48010774))

* [Do AI summaries hurt critical thinking?](https://medium.com/blueprint-for-disaster/ai-summaries-are-a-threat-to-our-cognitive-sovereignty-917afc37692f) ([comments](https://lobste.rs/s/txbgo5/do_ai_summaries_hurt_critical_thinking))

* [An Amateur Just Solved a 60-Year-Old Math Problem—by Asking AI](https://soylentnews.org/article.pl?sid=26/05/03/0232241&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=48006445))

* [OpenAI Introduces AI-Generated Pets for Its Codex App](https://idle.slashdot.org/story/26/05/03/2354219/openai-introduces-ai-generated-pets-for-its-codex-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48006445))

## Space and Scientific Discoveries

* [Scientists Discover 27 Potential New Planets That Orbit Two Stars](https://science.slashdot.org/story/26/05/04/046204/scientists-discover-27-potential-new-planets-that-orbit-two-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48010597))

* [Newton's law of gravity passes its biggest test](https://www.science.org/content/article/newton-s-law-gravity-passes-its-biggest-test-ever) ([comments](https://news.ycombinator.com/item?id=48008083))

## Privacy and Security

* [Alberta voter list leak is a potential public safety disaster](https://globalnews.ca/news/11828244/alberta-voter-list-leak-public-safety-disaster/) ([comments](https://news.ycombinator.com/item?id=48010208))

* [Trademark violation: Fake Notepad++ for Mac](https://notepad-plus-plus.org/news/npp-trademark-infringement/) ([comments](https://news.ycombinator.com/item?id=48006445))

* [Ransomware Is Getting Uglier As Cybercriminals Fake Leaks and Skip Encryption Entirely](https://it.slashdot.org/story/26/05/02/234244/ransomware-is-getting-uglier-as-cybercriminals-fake-leaks-and-skip-encryption-entirely?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48006445))

## Environment and Technology

* [Carbon Pollution Is Making Food Less Nutritious, Risking the Health of Billions](https://science.slashdot.org/story/26/05/03/2227240/carbon-pollution-is-making-food-less-nutritious-risking-the-health-of-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48006445))

* [AI Cameras are Being Deployed Across the Western US for Early Detection of Wildfires](https://news.slashdot.org/story/26/05/03/2319207/ai-cameras-are-being-deployed-across-the-western-us-for-early-detection-of-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48006445))

## Innovations in Education and Open Source

* [6.828: Operating System Engineering (2012)](https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/) ([comments](https://lobste.rs/s/da9oc0/6_828_operating_system_engineering_2012))

* [How LLMs Distort Our Written Language](https://sites.google.com/view/llmwritingdistortion/home) ([comments](https://lobste.rs/s/pidcaz/how_llms_distort_our_written_language))

* [Your Container Is Not a Sandbox](https://emirb.github.io/blog/microvm-2026/) ([comments](https://lobste.rs/s/bznmaf/your_container_is_not_sandbox))

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

* [2026-05-04, 16:33:47](https://news.ycombinator.com/item?id=48010992) - [\&quot;They would never use the death star on us\&quot;](https://www.mcsweeneys.net/articles/they-would-never-use-the-death-star-on-us-alderaan-residents-reflect-on-their-support-for-the-empire-as-a-large-imperial-installation-enters-the-system)
* [2026-05-04, 16:21:38](https://news.ycombinator.com/item?id=48010774) - [OpenAI, Google, and Microsoft Back Bill to Fund &apos;AI Literacy&apos; in Schools](https://www.404media.co/literacy-in-future-technologies-artificial-intelligence-act-adam-schiff-mike-rounds/)
* [2026-05-04, 16:12:25](https://news.ycombinator.com/item?id=48010597) - [Homebridge 2.0 is here, and it speaks Matter](https://www.theverge.com/tech/922877/homebridge-2-0-matter-update-robot-vacuums)
* [2026-05-04, 16:00:00](https://science.slashdot.org/story/26/05/04/046204/scientists-discover-27-potential-new-planets-that-orbit-two-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Discover 27 Potential New Planets That Orbit Two Stars](https://science.slashdot.org/story/26/05/04/046204/scientists-discover-27-potential-new-planets-that-orbit-two-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 15:53:21](https://news.ycombinator.com/item?id=48010301) - [GitHub Is Down](https://www.githubstatus.com/incidents/72q3n8yxthcy)
* [2026-05-04, 15:47:27](https://news.ycombinator.com/item?id=48010208) - [Alberta voter list leak is a potential public safety disaster](https://globalnews.ca/news/11828244/alberta-voter-list-leak-public-safety-disaster/)
* [2026-05-04, 15:46:18](https://lobste.rs/s/onby0z/byline_structured_identity_for) - [Byline: Structured Identity for Syndication Feeds](https://www.bylinespec.org/)
* [2026-05-04, 15:32:46](https://news.ycombinator.com/item?id=48009983) - [Does Employment Slow Cognitive Decline? Evidence from Labor Market Shocks](https://www.nber.org/papers/w35117)
* [2026-05-04, 15:22:53](https://news.ycombinator.com/item?id=48009840) - [1966 Ford Mustang Converted into a Tesla with Working &apos;Full Self-Driving&apos;](https://electrek.co/2026/05/02/tesla-1966-mustang-ev-conversion-full-self-driving/)
* [2026-05-04, 15:15:21](https://news.ycombinator.com/item?id=48009747) - [I tracked 7,700 UK petrol stations every 10 minutes for 3 months](https://www.fuelinsight.co.uk)
* [2026-05-04, 15:10:41](https://news.ycombinator.com/item?id=48009697) - [Removable batteries in smartphones will be mandatory in the EU starting in 2027](https://www.ecopv-eu.com/en/blog-en/replaceable-smartphone-batteries-2027-eu-regulation/)
* [2026-05-04, 15:00:50](https://lobste.rs/s/rfsdu4/redis_array_type_short_story_long) - [Redis array type: short story of a long development](https://antirez.com/news/164)
* [2026-05-04, 15:00:00](https://science.slashdot.org/story/26/05/04/0357217/infrasound-waves-stop-kitchen-fires-but-can-they-replace-sprinklers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Infrasound Waves Stop Kitchen Fires, But Can They Replace Sprinklers?](https://science.slashdot.org/story/26/05/04/0357217/infrasound-waves-stop-kitchen-fires-but-can-they-replace-sprinklers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 14:47:41](https://news.ycombinator.com/item?id=48009441) - [Pomiferous: The most extensive apples (pommes) database](https://pomiferous.com/)
* [2026-05-04, 14:42:34](https://lobste.rs/s/da9oc0/6_828_operating_system_engineering_2012) - [6.828: Operating System Engineering (2012)](https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/)
* [2026-05-04, 14:26:01](https://lobste.rs/s/flowcy/async_rust_never_left_mvp_state) - [Async Rust never left the MVP state](https://tweedegolf.nl/en/blog/237/async-rust-never-left-the-mvp-state)
* [2026-05-04, 14:23:07](https://news.ycombinator.com/item?id=48009172) - [Redis array: short story of a long development process](https://antirez.com/news/164)
* [2026-05-04, 14:20:00](https://soylentnews.org/article.pl?sid=26/05/03/0252239&amp;from=rss) - [Zambia Cancels Global Digital Freedoms Conference Days Before Start](https://soylentnews.org/article.pl?sid=26/05/03/0252239&amp;from=rss)
* [2026-05-04, 14:10:50](https://news.ycombinator.com/item?id=48009020) - [How Monero&apos;s proof of work works](https://blog.alcazarsec.com/tech/posts/how-moneros-proof-of-work-works)
* [2026-05-04, 14:05:05](https://lobste.rs/s/o9hnbc/how_i_create_static_websites_for_tiny) - [How I create static websites for tiny archives (2025)](https://alexwlchan.net/2025/mildly-dynamic-websites/)
* [2026-05-04, 14:03:16](https://lobste.rs/s/psurdf/package_manager_cwes) - [Package Manager CWEs](https://nesbitt.io/2026/05/04/package-manager-cwes.html)
* [2026-05-04, 13:17:06](https://lobste.rs/s/4t1gps/oops_cubic_macro) - [oops, cubic macro](https://bal-e.org/blog/2026/oops-cubic-macro/)
* [2026-05-04, 12:53:46](https://news.ycombinator.com/item?id=48008083) - [PyInfra 3.8.0 Is Out](https://github.com/pyinfra-dev/pyinfra/releases/tag/v3.8.0)
* [2026-05-04, 12:52:57](https://news.ycombinator.com/item?id=48008074) - [Newton&apos;s law of gravity passes its biggest test](https://www.science.org/content/article/newton-s-law-gravity-passes-its-biggest-test-ever)
* [2026-05-04, 12:32:00](https://news.ycombinator.com/item?id=48007880) - [DAG Workflow Engine](https://github.com/vivekg13186/Daisy-DAG)
* [2026-05-04, 12:24:41](https://lobste.rs/s/pidcaz/how_llms_distort_our_written_language) - [How LLMs Distort Our Written Language](https://sites.google.com/view/llmwritingdistortion/home)
* [2026-05-04, 11:50:22](https://lobste.rs/s/v1hrs7/tragedy_gethostbyname_2022) - [the tragedy of gethostbyname (2022)](https://ariadne.space/2022/03/26/the-tragedy-of-gethostbyname.html)
* [2026-05-04, 11:41:02](https://news.ycombinator.com/item?id=48007438) - [Talking to 35 Strangers at the Gym](https://thienantran.com/talking-to-35-strangers-at-the-gym/)
* [2026-05-04, 11:34:00](https://news.slashdot.org/story/26/05/04/0227227/16-of-parents-help-their-children-bypass-online-age-checks-study-finds-one-15-year-old-just-uses-a-fake-moustache?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [16% of Parents Help Their Children Bypass Online Age Checks, Study Finds. One 15-Year-Old Just Uses a Fake Moustache](https://news.slashdot.org/story/26/05/04/0227227/16-of-parents-help-their-children-bypass-online-age-checks-study-finds-one-15-year-old-just-uses-a-fake-moustache?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 11:06:16](https://lobste.rs/s/txbgo5/do_ai_summaries_hurt_critical_thinking) - [Do AI summaries hurt critical thinking?](https://medium.com/blueprint-for-disaster/ai-summaries-are-a-threat-to-our-cognitive-sovereignty-917afc37692f)
* [2026-05-04, 09:40:06](https://news.ycombinator.com/item?id=48006445) - [Trademark violation: Fake Notepad++ for Mac](https://notepad-plus-plus.org/news/npp-trademark-infringement/)
* [2026-05-04, 09:39:00](https://soylentnews.org/article.pl?sid=26/05/03/0232241&amp;from=rss) - [An Amateur Just Solved a 60-Year-Old Math Problem—by Asking AI](https://soylentnews.org/article.pl?sid=26/05/03/0232241&amp;from=rss)
* [2026-05-04, 09:31:12](https://news.ycombinator.com/item?id=48006402) - [GameStop makes $55.5B takeover offer for eBay](https://www.bbc.co.uk/news/articles/cn0p8yled1do)
* [2026-05-04, 08:40:01](https://lobste.rs/s/abg2mj/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/abg2mj/what_are_you_doing_this_week)
* [2026-05-04, 08:16:03](https://lobste.rs/s/pjuxhr/native_macos_app_track_youtube_channels) - [Native macOS app to track YouTube channels, no Google login required](https://github.com/agentcooper/Telik)
* [2026-05-04, 07:34:00](https://slashdot.org/story/26/05/03/1721250/can-investors-trust-ai-sales-figures-asks-wall-street-journal-opinion-piece?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Investors Trust AI Sales Figures? Asks Wall Street Journal Opinion Piece](https://slashdot.org/story/26/05/03/1721250/can-investors-trust-ai-sales-figures-asks-wall-street-journal-opinion-piece?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 06:36:50](https://lobste.rs/s/6cmh6h/reminder_you_can_stitch_together_lots) - [Reminder: You Can Stitch Together Lots of Little HTML Pages With Navigations For Interactions](https://blog.jim-nielsen.com/2026/small-html-pages/)
* [2026-05-04, 05:52:27](https://lobste.rs/s/rks8da/i_accidentally_made_law_enforcement_shut) - [I accidentally made law enforcement shut down their stresser honeypot](https://lina.sh/blog/ddos-honeypot)
* [2026-05-04, 04:52:00](https://soylentnews.org/article.pl?sid=26/05/03/0223205&amp;from=rss) - [The Mushroom Making People Hallucinate Dozens of Tiny Humans](https://soylentnews.org/article.pl?sid=26/05/03/0223205&amp;from=rss)
* [2026-05-04, 04:34:00](https://yro.slashdot.org/story/26/05/04/0217228/roblox-blames-age-verification-rollout-for-lowered-growth-stock-tumbles-22?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Roblox Blames Age-Verification Rollout for Lowered Growth. Stock Tumbles 22%](https://yro.slashdot.org/story/26/05/04/0217228/roblox-blames-age-verification-rollout-for-lowered-growth-stock-tumbles-22?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 03:59:57](https://lobste.rs/s/60qq1o/designing_microkernel_ipc) - [Designing microkernel IPC](https://seiya.me/blog/microkernel-ipc-design)
* [2026-05-04, 02:09:00](https://games.slashdot.org/story/26/05/04/0137222/nethack-50-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NetHack 5.0 Released](https://games.slashdot.org/story/26/05/04/0137222/nethack-50-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 00:29:00](https://idle.slashdot.org/story/26/05/03/2354219/openai-introduces-ai-generated-pets-for-its-codex-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Introduces AI-Generated Pets for Its Codex App](https://idle.slashdot.org/story/26/05/03/2354219/openai-introduces-ai-generated-pets-for-its-codex-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 00:09:00](https://soylentnews.org/article.pl?sid=26/05/03/020241&amp;from=rss) - [Ask.com Closes](https://soylentnews.org/article.pl?sid=26/05/03/020241&amp;from=rss)
* [2026-05-03, 23:36:11](https://news.ycombinator.com/item?id=48002777) - [Let&apos;s Buy Spirit Air](https://letsbuyspiritair.com/)
* [2026-05-03, 23:29:00](https://news.slashdot.org/story/26/05/03/2319207/ai-cameras-are-being-deployed-across-the-western-us-for-early-detection-of-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Cameras are Being Deployed Across the Western US for Early Detection of Wildfires](https://news.slashdot.org/story/26/05/03/2319207/ai-cameras-are-being-deployed-across-the-western-us-for-early-detection-of-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 23:12:36](https://lobste.rs/s/gzosvk/blue_ridge_ruby_2026) - [Blue Ridge Ruby 2026](https://microblog.thomascannon.me/2026/05/03/blue-ridge-ruby.html)
* [2026-05-03, 22:52:54](https://lobste.rs/s/dyq1jw/agentic_coding_is_trap) - [Agentic Coding is a Trap](https://larsfaye.com/articles/agentic-coding-is-a-trap)
* [2026-05-03, 22:29:00](https://science.slashdot.org/story/26/05/03/2227240/carbon-pollution-is-making-food-less-nutritious-risking-the-health-of-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Carbon Pollution Is Making Food Less Nutritious, Risking the Health of Billions ](https://science.slashdot.org/story/26/05/03/2227240/carbon-pollution-is-making-food-less-nutritious-risking-the-health-of-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 22:13:20](https://news.ycombinator.com/item?id=48002136) - [DeepClaude – Claude Code agent loop with DeepSeek V4 Pro](https://github.com/aattaran/deepclaude)
* [2026-05-03, 21:18:17](https://lobste.rs/s/4n38xw/broadcasting_gps_on_local_network) - [Broadcasting GPS on the local network](https://evertpot.com/broadcasting-gps-on-local-network/)
* [2026-05-03, 20:59:00](https://hardware.slashdot.org/story/26/05/03/2055244/robots-are-building-clay-homes-in-texas-using-dirt-from-the-ground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robots Are Building Clay Homes In Texas Using Dirt From the Ground](https://hardware.slashdot.org/story/26/05/03/2055244/robots-are-building-clay-homes-in-texas-using-dirt-from-the-ground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 19:41:00](https://tech.slashdot.org/story/26/05/03/1939253/its-goodbye-time-for-jeeves-and-askcom---relics-of-yesterdays-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [It&apos;s Goodbye Time for Jeeves and Ask.com - Relics of Yesterday&apos;s Internet](https://tech.slashdot.org/story/26/05/03/1939253/its-goodbye-time-for-jeeves-and-askcom---relics-of-yesterdays-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 19:19:00](https://soylentnews.org/article.pl?sid=26/05/01/079248&amp;from=rss) - [The Linux Kernel Tree About to Hit 40 Million Lines, AMD Driver Above 6 Million Lines](https://soylentnews.org/article.pl?sid=26/05/01/079248&amp;from=rss)
* [2026-05-03, 18:28:00](https://games.slashdot.org/story/26/05/03/1826206/former-nintendo-executive-says-amazon-once-requested-illegal-price-discounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Nintendo Executive Says Amazon Once Requested &apos;Illegal&apos; Price Discounts](https://games.slashdot.org/story/26/05/03/1826206/former-nintendo-executive-says-amazon-once-requested-illegal-price-discounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 18:03:14](https://news.ycombinator.com/item?id=47999636) - [BYOMesh – New LoRa mesh radio offers 100x the bandwidth](https://partyon.xyz/@nullagent/116499715071759135)
* [2026-05-03, 18:00:05](https://lobste.rs/s/bmhm7k/this_wasm_interpreter_fits_qr_code) - [This Wasm interpreter fits in a QR code](https://purplesyringa.moe/blog/this-wasm-interpreter-fits-in-a-qr-code/)
* [2026-05-03, 17:34:49](https://lobste.rs/s/xvtq0l/fake_notepad_for_mac) - [Fake Notepad++ for Mac](https://notepad-plus-plus.org/news/npp-trademark-infringement/)
* [2026-05-03, 17:02:13](https://news.ycombinator.com/item?id=47998946) - [Southwest Headquarters Tour](https://katherinemichel.github.io/blog/travel/southwest-headquarters-tour-2026.html)
* [2026-05-03, 16:34:00](https://slashdot.org/story/26/05/03/0627248/chatgpt-became-so-obsessed-with-goblins-that-openai-had-to-intervene?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Became So Obsessed With Goblins That OpenAI Had to Intervene](https://slashdot.org/story/26/05/03/0627248/chatgpt-became-so-obsessed-with-goblins-that-openai-had-to-intervene?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 15:48:56](https://lobste.rs/s/bznmaf/your_container_is_not_sandbox) - [Your Container Is Not a Sandbox](https://emirb.github.io/blog/microvm-2026/)
* [2026-05-03, 15:34:00](https://yro.slashdot.org/story/26/05/03/0019210/south-africas-draft-ai-policy-withdrawn-due-to-fictitious-ai-generated-citations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Africa&apos;s Draft AI Policy Withdrawn Due to &apos;Fictitious&apos; AI-Generated Citations](https://yro.slashdot.org/story/26/05/03/0019210/south-africas-draft-ai-policy-withdrawn-due-to-fictitious-ai-generated-citations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 14:49:25](https://lobste.rs/s/klw6bu/desktop_made_for_one) - [A desktop made for one](https://isene.org/2026/05/Audience-of-One.html)
* [2026-05-03, 14:35:00](https://soylentnews.org/article.pl?sid=26/05/01/078213&amp;from=rss) - [There&apos;s a Good Reason Semi Trucks Don&apos;t Use V8s](https://soylentnews.org/article.pl?sid=26/05/01/078213&amp;from=rss)
* [2026-05-03, 14:34:00](https://it.slashdot.org/story/26/05/02/234244/ransomware-is-getting-uglier-as-cybercriminals-fake-leaks-and-skip-encryption-entirely?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ransomware Is Getting Uglier As Cybercriminals Fake Leaks and Skip Encryption Entirely](https://it.slashdot.org/story/26/05/02/234244/ransomware-is-getting-uglier-as-cybercriminals-fake-leaks-and-skip-encryption-entirely?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 12:43:53](https://lobste.rs/s/ffu7l8/my_favorite_device_is_chromebook_without) - [My favorite device is a Chromebook, without ChromeOS](https://kokada.dev/blog/my-favorite-device-is-a-chromebook-without-chromeos/)
* [2026-05-03, 12:03:54](https://lobste.rs/s/ifbdw1/text_mode_lie_why_modern_tuis_are) - [The text mode lie: why modern TUIs are a nightmare for accessibility](https://xogium.me/the-text-mode-lie-why-modern-tuis-are-a-nightmare-for-accessibility)
* [2026-05-03, 09:52:00](https://soylentnews.org/article.pl?sid=26/05/01/073236&amp;from=rss) - [Ghostty Is Leaving GitHub - Ghostty Developer Loses Confidence in GitHub’s Reliability](https://soylentnews.org/article.pl?sid=26/05/01/073236&amp;from=rss)
* [2026-05-03, 09:38:28](https://lobste.rs/s/dp3tdn/pgbackrest_is_dead_now_what) - [pgBackRest is dead. Now what?](https://mydbanotebook.org/posts/pgbackrest-is-dead.-now-what/)
* [2026-05-03, 05:10:00](https://soylentnews.org/article.pl?sid=26/05/01/0658214&amp;from=rss) - [Round Up of Latest OS and Browser Releases](https://soylentnews.org/article.pl?sid=26/05/01/0658214&amp;from=rss)
* [2026-05-03, 00:27:00](https://soylentnews.org/article.pl?sid=26/05/01/0648229&amp;from=rss) - [The Resurrected Commodore 64 is Getting a Facelift Like the Original](https://soylentnews.org/article.pl?sid=26/05/01/0648229&amp;from=rss)
* [2026-05-02, 19:42:00](https://soylentnews.org/article.pl?sid=26/05/01/0645211&amp;from=rss) - [Drone Pilot Makes US Rescind No-Fly Zones Around Unmarked, Moving ICE Vehicles](https://soylentnews.org/article.pl?sid=26/05/01/0645211&amp;from=rss)
* [2026-05-02, 18:04:28](https://news.ycombinator.com/item?id=47988781) - [World&apos;s biggest RC A380 [video]](https://www.youtube.com/watch?v=wr9YLGbhxng)
* [2026-05-02, 14:56:00](https://soylentnews.org/article.pl?sid=26/05/01/0637252&amp;from=rss) - [Linux Cryptographic Code Flaw Offers Fast Route to Root](https://soylentnews.org/article.pl?sid=26/05/01/0637252&amp;from=rss)
* [2026-05-02, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss) - [Apple Wants to Kill Your Time Capsule, but They Run NetBSD So They Can&apos;t](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss)
* [2026-05-02, 05:21:00](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss) - [Google and Pentagon Reportedly Agree on Deal for ‘Any Lawful’ Use of AI](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss)
* [2026-05-02, 05:00:12](https://news.ycombinator.com/item?id=47983467) - [Why are neural networks and cryptographic ciphers so similar? (2025)](https://reiner.org/neural-net-ciphers)
* [2026-05-02, 04:34:40](https://news.ycombinator.com/item?id=47983333) - [Texico: Learn the principles of programming without even touching a computer](https://www3.nhk.or.jp/nhkworld/en/shows/texico/)
* [2026-05-02, 00:38:00](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss) - [How Linux 7.0 Broke PostgreSQL](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss)
* [2026-05-01, 19:55:00](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss) - [Colorado&apos;s Anti-Repair Bill is Dead](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss)
* [2026-05-01, 18:07:28](https://news.ycombinator.com/item?id=47977990) - [Using “underdrawings” for accurate text and numbers](https://samcollins.blog/underdrawings/)
* [2026-05-01, 15:42:32](https://news.ycombinator.com/item?id=47976081) - [A treasure trove of fossils rewrites the story of early life](https://www.quantamagazine.org/a-treasure-trove-of-cambrian-fossils-rewrites-the-story-of-early-life-20260501/)
* [2026-05-01, 15:11:00](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss) - [Vibe Coding Will Break Your Company      ](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss)
* [2026-05-01, 14:24:27](https://news.ycombinator.com/item?id=47975166) - [Fun with polynomials and linear algebra; or, slight abstract nonsense](https://guille.site/posts/abstract-nonsense/)
* [2026-05-01, 13:38:27](https://news.ycombinator.com/item?id=47974682) - [US–Indian space mission maps extreme subsidence in Mexico City](https://phys.org/news/2026-04-usindian-space-mission-extreme-subsidence.html)
* [2026-05-01, 10:25:00](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss) - [Google Ad Income Per User - With Demographic Breakdown](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss)
* [2026-05-01, 05:41:00](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss) - [Microsoft Pushes Out Experienced American Talent to Fuel AI Ambitions](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss)
* [2026-05-01, 00:58:00](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss) - [Your Phone is About to Stop Being Yours. Keep Android Open!](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss)
* [2026-04-30, 21:02:06](https://news.ycombinator.com/item?id=47968187) - [Discovering hard disk physical geometry through microbenchmarking (2019)](https://blog.stuffedcow.net/2019/09/hard-disk-geometry-microbenchmarking/)
* [2026-04-30, 20:13:00](https://soylentnews.org/article.pl?sid=26/04/29/1243245&amp;from=rss) - [Gone in Nine Seconds](https://soylentnews.org/article.pl?sid=26/04/29/1243245&amp;from=rss)
* [2026-04-30, 15:24:00](https://soylentnews.org/article.pl?sid=26/04/29/1156248&amp;from=rss) - [Electrical Current Might be the Key to a Better Cup of Coffee](https://soylentnews.org/article.pl?sid=26/04/29/1156248&amp;from=rss)
* [2026-04-30, 10:38:00](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss) - [NASAs Incredible New Telescope Will Offer an Atlas of the Universe](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss)
* [2026-04-30, 05:53:00](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss) - [Microsoft Reportedly Looking at Rebasing Azure Linux on Fedora](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss)
* [2026-04-30, 01:08:00](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss) - [China&apos;s Biggest Streaming Platform Wants Most of its New Films to be AI-Generated](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss)
