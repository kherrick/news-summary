# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific and Medical Breakthroughs

* [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - Researchers have developed a method to distinguish between healthy and cancerous cells based on their movement patterns.

* [Astronomers Say They’ve Recorded the Strongest Sign Yet of Life Beyond Earth](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss) - A groundbreaking discovery points to the most compelling evidence of extraterrestrial life ever recorded.

* [Medical Cannabis Shows Potential to Fight Cancer, Largest-Ever Study Finds](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss) - New research from the largest study to date highlights medical cannabis as a potential cancer treatment.

## Innovations in Computing and Programming

* [Flat origami is Turing complete (2023)](https://arxiv.org/abs/2309.07932) - Fascinating new research shows that flat origami folds are theoretically capable of universal computation.

* [Scritch | modified scratch optimised for teaching](https://jonathanalland.com/scritch.html) - An innovative platform tailored to optimize Scratch programming for educational settings.

* [Pipelining might be my favorite programming language feature](https://herecomesthemoon.net/2025/04/pipelining/) - A reflective dive into the elegance and utility of the pipelining feature in programming.

* [Reverse engineering the obfuscated TikTok VM](https://github.com/LukasOgunfeitimi/TikTok-ReverseEngineering) - A technically intricate exploration of decoding TikTok's virtual machine mechanisms.

* [pgdog: Horizontal scaling for PostgreSQL with automatic sharding](https://github.com/pgdogdev/pgdog) - Introducing "pgdog," which simplifies horizontal scaling in PostgreSQL with built-in sharding capabilities.

## Cybersecurity and AI Developments

* [AI Hallucinations Lead To a New Cyber Threat: Slopsquatting](https://it.slashdot.org/story/25/04/22/0118200/ai-hallucinations-lead-to-a-new-cyber-threat-slopsquatting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new study highlights the emergence of "slopsquatting," a novel cyber threat exacerbated by AI-generated errors.

* [Forecaster reacts: METR&apos;s bombshell paper about AI acceleration](https://peterwildeford.substack.com/p/forecaster-reacts-metrs-bombshell) - Insights and implications of METR's breakthrough research on accelerating AI development.

* [CaMeL: Defeating Prompt Injections by Design](https://arxiv.org/abs/2503.18813) - Researchers propose a novel approach to secure AI systems against prompt injections.

## Technology and Hardware Innovations

* [Evertop: E-ink IBM XT clone with 100+ hours of battery life](https://github.com/ericjenott/Evertop) - Dive into a low-power, high-endurance e-ink computing device.

* [A M.2 HDMI capture card](https://interfacinglinux.com/2025/04/18/magewell-eco-m-2-hdmi-capture-card/) - Introducing a compact and efficient hardware solution for HDMI capture via M.2 interface.

* [Ultra-precision formation flying demonstration for space-based interferometry](https://arxiv.org/abs/2504.05001) - New advances in space technology showcase exceptional precision for satellite formation flying.

## Unique Platforms and Concepts

* [A weird phrase is plaguing scientific papers](https://theconversation.com/a-weird-phrase-is-plaguing-scientific-papers-and-we-traced-it-back-to-a-glitch-in-ai-training-data-254463) - Discover how a glitch in AI training data led to the repeated use of an unusual phrase in scientific documents.

* [This blog is hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/) - An eccentric project brings life to a blog hosted entirely on now-vintage Nintendo Wii hardware.

* [Building a Website Fit for 1999](https://www.wezm.net/v2/posts/2025/website-fit-for-1999/) - A nostalgic journey into creating a website with late 90s-inspired technology and aesthetics.

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

* [2025-04-22, 06:44:00](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss)
* [2025-04-22, 06:31:29](https://lobste.rs/s/ydxus1/pipelining_might_be_my_favorite) - [Pipelining might be my favorite programming language feature](https://herecomesthemoon.net/2025/04/pipelining/)
* [2025-04-22, 06:28:00](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss) - [ \&quot;Only 2 submissions in the queue.\&quot;](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss)
* [2025-04-22, 05:49:15](https://lobste.rs/s/y0kdjy/scritch_modified_scratch_optimised_for) - [Scritch | modified scratch optimised for teaching](https://jonathanalland.com/scritch.html)
* [2025-04-22, 04:43:22](https://news.ycombinator.com/item?id=43759130) - [A weird phrase is plaguing scientific papers](https://theconversation.com/a-weird-phrase-is-plaguing-scientific-papers-and-we-traced-it-back-to-a-glitch-in-ai-training-data-254463)
* [2025-04-22, 04:27:40](https://news.ycombinator.com/item?id=43759073) - [Attacking My Landlord&apos;s Boiler](https://blog.videah.net/attacking-my-landlords-boiler/)
* [2025-04-22, 04:27:02](https://lobste.rs/s/18ycoz/attacking_my_landlord_s_boiler) - [Attacking My Landlord&apos;s Boiler](https://blog.videah.net/attacking-my-landlords-boiler/)
* [2025-04-22, 04:07:04](https://news.ycombinator.com/item?id=43758999) - [Welcome to our website for the 1963 BBC MCR21 OB Van](https://mcr21.org.uk/)
* [2025-04-22, 04:01:59](https://lobste.rs/s/naazom/cheating_reaper_go) - [Cheating the Reaper in Go](https://mcyoung.xyz/2025/04/21/go-arenas/)
* [2025-04-22, 03:57:47](https://news.ycombinator.com/item?id=43758965) - [&apos;World War Zoos&apos; Review: Of Bombs and Beasts](https://www.wsj.com/arts-culture/books/world-war-zoos-review-of-bombs-and-beasts-a037c4b6)
* [2025-04-22, 03:50:20](https://news.ycombinator.com/item?id=43758936) - [Forecaster reacts: METR&apos;s bombshell paper about AI acceleration](https://peterwildeford.substack.com/p/forecaster-reacts-metrs-bombshell)
* [2025-04-22, 03:30:00](https://news.slashdot.org/story/25/04/21/2056255/the-quest-to-build-islands-with-ocean-currents-in-the-maldives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Quest To Build Islands With Ocean Currents In the Maldives](https://news.slashdot.org/story/25/04/21/2056255/the-quest-to-build-islands-with-ocean-currents-in-the-maldives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 03:09:50](https://news.ycombinator.com/item?id=43758762) - [Flat origami is Turing complete (2023)](https://arxiv.org/abs/2309.07932)
* [2025-04-22, 02:01:00](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss) - [Jim Zemlin on Taking a &apos;Portfolio Approach&apos; to Linux Foundation Projects](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss)
* [2025-04-22, 01:40:00](https://it.slashdot.org/story/25/04/22/0118200/ai-hallucinations-lead-to-a-new-cyber-threat-slopsquatting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Hallucinations Lead To a New Cyber Threat: Slopsquatting](https://it.slashdot.org/story/25/04/22/0118200/ai-hallucinations-lead-to-a-new-cyber-threat-slopsquatting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 01:19:50](https://lobste.rs/s/klqcce/decentralizing_schemes) - [Decentralizing Schemes](https://www.tbray.org/ongoing/When/202x/2025/04/16/Decentralized-Schemes)
* [2025-04-22, 01:12:00](https://news.slashdot.org/story/25/04/22/0110251/airbnb-now-shows-the-full-price-of-your-stay-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbnb Now Shows the Full Price of Your Stay By Default](https://news.slashdot.org/story/25/04/22/0110251/airbnb-now-shows-the-full-price-of-your-stay-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 01:08:00](https://slashdot.org/story/25/04/22/018236/microsoft-implements-stricter-performance-management-system-with-two-year-rehire-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Implements Stricter Performance Management System With Two-Year Rehire Ban](https://slashdot.org/story/25/04/22/018236/microsoft-implements-stricter-performance-management-system-with-two-year-rehire-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 00:25:12](https://news.ycombinator.com/item?id=43757916) - [Prolog Adventure Game](https://github.com/stefanrodrigues2/Prolog-Adventure-game)
* [2025-04-22, 00:23:26](https://lobste.rs/s/llxpp7/first_impressions_pocket_flow_s_tutorial) - [First impressions of Pocket Flow’s tutorial generator](https://technicalwriting.dev/ml/pocketflow/index.html)
* [2025-04-21, 23:40:00](https://hardware.slashdot.org/story/25/04/21/2049235/chinas-catl-says-it-has-overtaken-byd-on-5-minute-ev-charging-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s CATL Says It Has Overtaken BYD On 5-Minute EV Charging Time](https://hardware.slashdot.org/story/25/04/21/2049235/chinas-catl-says-it-has-overtaken-byd-on-5-minute-ev-charging-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 23:06:49](https://lobste.rs/s/gt4wye/record_tuple_ecmascript_proposal_has) - [The Record/Tuple ECMAScript Proposal has been withdrawn](https://github.com/tc39/proposal-record-tuple)
* [2025-04-21, 23:00:00](https://hardware.slashdot.org/story/25/04/21/2039200/wd-launches-hdd-recycling-process-that-reclaims-rare-earth-elements-cuts-out-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WD Launches HDD Recycling Process That Reclaims Rare Earth Elements, Cuts Out China](https://hardware.slashdot.org/story/25/04/21/2039200/wd-launches-hdd-recycling-process-that-reclaims-rare-earth-elements-cuts-out-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 22:47:38](https://news.ycombinator.com/item?id=43757341) - [101 BASIC Computer Games](https://github.com/maurymarkowitz/101-BASIC-Computer-Games)
* [2025-04-21, 22:20:00](https://slashdot.org/story/25/04/21/2031221/amazon-has-paused-some-data-center-lease-commitments-wells-fargo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Has Paused Some Data Center Lease Commitments, Wells Fargo Says](https://slashdot.org/story/25/04/21/2031221/amazon-has-paused-some-data-center-lease-commitments-wells-fargo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 22:15:40](https://lobste.rs/s/z2jpjn/building_website_fit_for_1999) - [Building a Website Fit for 1999](https://www.wezm.net/v2/posts/2025/website-fit-for-1999/)
* [2025-04-21, 22:07:49](https://news.ycombinator.com/item?id=43757037) - [Evertop: E-ink IBM XT clone with 100+ hours of battery life](https://github.com/ericjenott/Evertop)
* [2025-04-21, 21:46:32](https://news.ycombinator.com/item?id=43756871) - [Cheating the Reaper in Go](https://mcyoung.xyz/2025/04/21/go-arenas/)
* [2025-04-21, 21:40:00](https://tech.slashdot.org/story/25/04/21/2031245/cursor-ais-own-support-bot-hallucinated-its-usage-policy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cursor AI&apos;s Own Support Bot Hallucinated Its Usage Policy](https://tech.slashdot.org/story/25/04/21/2031245/cursor-ais-own-support-bot-hallucinated-its-usage-policy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 21:31:40](https://news.ycombinator.com/item?id=43756723) - [Ultra-precision formation flying demonstration for space-based interferometry](https://arxiv.org/abs/2504.05001)
* [2025-04-21, 21:28:46](https://lobste.rs/s/9zmd46/values_wild_discovering_analyzing) - [Values in the wild: Discovering and analyzing values in real-world language model interactions](https://www.anthropic.com/research/values-wild)
* [2025-04-21, 21:13:47](https://lobste.rs/s/ld1kzl/separating_work_personal_config) - [Separating work and personal config](https://www.emoses.org/posts/keeping-work-separate/)
* [2025-04-21, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss) - [Deepseek Open Source model Promotes Fast Innovation and Extensive Application in China](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss)
* [2025-04-21, 21:00:53](https://news.ycombinator.com/item?id=43756417) - [Cekura (Formerly Vocera) (YC F24) Is Hiring](https://www.ycombinator.com/companies/cekura-2/jobs/xaoCPco-founding-engineer)
* [2025-04-21, 20:57:00](https://tech.slashdot.org/story/25/04/21/2027253/wine-106-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 10.6 Released](https://tech.slashdot.org/story/25/04/21/2027253/wine-106-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 20:49:20](https://news.ycombinator.com/item?id=43756309) - [Visiting Us](https://www.epic.com/visiting/)
* [2025-04-21, 20:15:00](https://news.slashdot.org/story/25/04/21/2014234/teen-coder-shuts-down-open-source-mac-app-whisky-citing-harm-to-paid-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Teen Coder Shuts Down Open Source Mac App Whisky, Citing Harm To Paid Apps](https://news.slashdot.org/story/25/04/21/2014234/teen-coder-shuts-down-open-source-mac-app-whisky-citing-harm-to-paid-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 19:31:00](https://lobste.rs/s/eqqops/this_blog_is_hosted_on_nintendo_wii) - [This blog is hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/)
* [2025-04-21, 19:10:00](https://slashdot.org/story/25/04/21/1910242/eu-says-it-will-enforce-digital-rules-irrespective-of-ceo-and-location?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Says It Will Enforce Digital Rules Irrespective of CEO and Location](https://slashdot.org/story/25/04/21/1910242/eu-says-it-will-enforce-digital-rules-irrespective-of-ceo-and-location?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 19:01:55](https://news.ycombinator.com/item?id=43755286) - [A M.2 HDMI capture card](https://interfacinglinux.com/2025/04/18/magewell-eco-m-2-hdmi-capture-card/)
* [2025-04-21, 18:36:23](https://news.ycombinator.com/item?id=43755017) - [Astronomers confirm the existence of a lone black hole](https://phys.org/news/2025-04-astronomers-lone-black-hole.html)
* [2025-04-21, 18:33:02](https://lobste.rs/s/awsduo/new_form_verification_on_bluesky) - [A New Form of Verification on Bluesky](https://bsky.social/about/blog/04-21-2025-verification)
* [2025-04-21, 18:29:04](https://news.ycombinator.com/item?id=43754953) - [Blog hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/)
* [2025-04-21, 18:15:00](https://news.slashdot.org/story/25/04/21/1748214/ftc-sues-uber-over-deceptive-subscription-billing-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Sues Uber Over Deceptive Subscription Billing Practices](https://news.slashdot.org/story/25/04/21/1748214/ftc-sues-uber-over-deceptive-subscription-billing-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 17:57:03](https://news.ycombinator.com/item?id=43754620) - [Show HN: Open Codex – OpenAI Codex CLI with open-source LLMs](https://github.com/codingmoh/open-codex)
* [2025-04-21, 17:36:00](https://tech.slashdot.org/story/25/04/21/1736226/google-faces-off-with-us-government-in-attempt-to-break-up-company-in-search-monopoly-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Faces Off With US Government in Attempt To Break Up Company in Search Monopoly Case](https://tech.slashdot.org/story/25/04/21/1736226/google-faces-off-with-us-government-in-attempt-to-break-up-company-in-search-monopoly-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 17:22:55](https://news.ycombinator.com/item?id=43754274) - [FTC takes action against Uber for deceptive billing and cancellation practices](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-takes-action-against-uber-deceptive-billing-cancellation-practices)
* [2025-04-21, 17:07:07](https://news.ycombinator.com/item?id=43754124) - [Show HN: Dia, an open-weights TTS model for generating realistic dialogue](https://github.com/nari-labs/dia)
* [2025-04-21, 16:50:00](https://yro.slashdot.org/story/25/04/21/1650237/verizon-consumer-ceo-says-net-neutrality-went-literally-nowhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Consumer CEO Says Net Neutrality &apos;Went Literally Nowhere&apos;](https://yro.slashdot.org/story/25/04/21/1650237/verizon-consumer-ceo-says-net-neutrality-went-literally-nowhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 16:37:51](https://lobste.rs/s/ymcuvb/retracing_google_s_steps_recreating) - [Retracing Google’s steps: recreating the Webtable in Rust](https://fjall-rs.github.io/post/recreating-webtable/)
* [2025-04-21, 16:28:00](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss) - [The Universe Isn&apos;t Just Expanding—It May be Spinning](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss)
* [2025-04-21, 16:16:51](https://news.ycombinator.com/item?id=43753651) - [A new form of verification on Bluesky](https://bsky.social/about/blog/04-21-2025-verification)
* [2025-04-21, 16:05:00](https://science.slashdot.org/story/25/04/21/1557216/invasion-of-the-journal-snatchers-the-firms-that-buy-science-publications-and-turn-them-rogue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Invasion of the &apos;Journal Snatchers&apos;: the Firms That Buy Science Publications and Turn Them Rogue](https://science.slashdot.org/story/25/04/21/1557216/invasion-of-the-journal-snatchers-the-firms-that-buy-science-publications-and-turn-them-rogue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 15:25:47](https://lobste.rs/s/qnvvne/pgdog_horizontal_scaling_for_postgresql) - [pgdog: Horizontal scaling for PostgreSQL with automatic sharding](https://github.com/pgdogdev/pgdog)
* [2025-04-21, 14:36:14](https://news.ycombinator.com/item?id=43752492) - [LLM-powered tools amplify developer capabilities rather than replacing them](https://matthewsinclair.com/blog/0178-why-llm-powered-programming-is-more-mech-suit-than-artificial-human)
* [2025-04-21, 14:15:17](https://news.ycombinator.com/item?id=43752262) - [AI assisted search-based research works now](https://simonwillison.net/2025/Apr/21/ai-assisted-search/)
* [2025-04-21, 14:07:03](https://news.ycombinator.com/item?id=43752176) - [Launch HN: Magic Patterns (YC W23) – AI Design and Prototyping for Product Teams](https://news.ycombinator.com/item?id=43752176)
* [2025-04-21, 12:52:27](https://lobste.rs/s/3s9y3i/nerdlog_fast_multi_host_tui_log_viewer) - [Nerdlog: Fast, multi-host TUI log viewer with timeline histogram](https://dmitryfrank.com/projects/nerdlog/article)
* [2025-04-21, 12:37:19](https://lobste.rs/s/mdshkf/getting_forked_by_microsoft) - [Getting Forked by Microsoft](https://philiplaine.com/posts/getting-forked-by-microsoft/)
* [2025-04-21, 12:16:16](https://news.ycombinator.com/item?id=43751076) - [Pipelining might be my favorite programming language feature](https://herecomesthemoon.net/2025/04/pipelining/)
* [2025-04-21, 11:41:00](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss) - [Google Introduces Firebase Studio, an End-to-End Platform That Builds Custom Apps in-Browser](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss)
* [2025-04-21, 11:18:31](https://lobste.rs/s/vioyel/projects_for_old_os_x) - [Projects For Old OS X](https://jonathanalland.com/old-osx-projects.html)
* [2025-04-21, 11:05:44](https://news.ycombinator.com/item?id=43750535) - [Getting forked by Microsoft](https://philiplaine.com/posts/getting-forked-by-microsoft/)
* [2025-04-21, 10:03:03](https://lobste.rs/s/66gzvi/reverse_engineering_obfuscated_tiktok) - [Reverse engineering the obfuscated TikTok VM](https://github.com/LukasOgunfeitimi/TikTok-ReverseEngineering)
* [2025-04-21, 09:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss) - [Pope Francis Has Died on Easter Monday Aged 88](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss)
* [2025-04-21, 09:46:38](https://lobste.rs/s/wup76i/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/wup76i/what_are_you_doing_this_week)
* [2025-04-21, 06:53:00](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss) - [Intel Agrees to Sell Controlling Stake in Altera Chip Business](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss)
* [2025-04-21, 04:17:24](https://lobste.rs/s/p1a2mz/regex_affordances) - [Regex affordances](https://nedbatchelder.com/blog/202504/regex_affordances.html)
* [2025-04-21, 03:46:59](https://lobste.rs/s/ghq0lb/why_are_big_tech_companies_so_slow) - [Why are big tech companies so slow?](https://www.seangoedecke.com/difficulty-in-big-tech/)
* [2025-04-21, 03:38:42](https://lobste.rs/s/2b1xg9/turing_drawings) - [Turing-Drawings](https://github.com/maximecb/Turing-Drawings)
* [2025-04-21, 02:16:15](https://lobste.rs/s/p5g7rn/python_s_new_t_strings) - [Python&apos;s new t-strings](https://davepeck.org/2025/04/11/pythons-new-t-strings/)
* [2025-04-21, 02:08:00](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss) - [Google Has Illegal Advertising Monopoly, Judge Rules](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss)
* [2025-04-20, 23:45:25](https://lobste.rs/s/pncgon/what_i_d_do_as_college_freshman_2025) - [What I&apos;d do as a College Freshman in 2025](http://muratbuffalo.blogspot.com/2025/04/what-id-do-as-college-freshman.html)
* [2025-04-20, 21:22:00](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss) - [Astronomers Say They’ve Recorded the Strongest Sign Yet of Life Beyond Earth](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss)
* [2025-04-20, 20:47:42](https://lobste.rs/s/7od3uk/how_i_use_kate_editor) - [How I use Kate Editor](https://akselmo.dev/posts/how-i-use-kate-editor/)
* [2025-04-20, 19:38:29](https://news.ycombinator.com/item?id=43745987) - [Verus: Verified Rust for low-level systems code](https://github.com/secure-foundations/verus)
* [2025-04-20, 16:39:00](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) - [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss)
* [2025-04-20, 11:55:00](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss) - [Spyware Maker NSO Group is Paving a Path Back Into Trump’s America](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss)
* [2025-04-20, 07:13:00](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss) - [Here&apos;s How a Satellite Ended Up as a Ghostly Apparition on Google Earth](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss)
* [2025-04-20, 02:28:00](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss) - [Everyone in AI is Talking About Manus. We Put It to the Test.](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss)
* [2025-04-19, 21:47:00](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss) - [Medical Cannabis Shows Potential to Fight Cancer, Largest-Ever Study Finds](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss)
* [2025-04-19, 17:02:00](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss) - [How a 1980s Toy Robot Arm Inspired Modern Robotics](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss)
* [2025-04-19, 12:19:00](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss) - [Inside arXiv—the Most Transformative Platform in All of Science](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss)
* [2025-04-19, 11:43:08](https://news.ycombinator.com/item?id=43735764) - [An Update on Pahole](https://lwn.net/Articles/1016243/)
* [2025-04-19, 08:37:00](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss) - [Vibe Coding _ !@#$% Kids! ](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss)
* [2025-04-19, 06:48:21](https://news.ycombinator.com/item?id=43734706) - [Synology Lost the Plot with Hard Drive Locking Move](https://www.servethehome.com/synology-lost-the-plot-with-hard-drive-locking-move/)
* [2025-04-19, 04:53:00](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss) - [UK Founders Grow Frustrated Over Dearth of Funding: &apos;the Problem is Getting Worse&apos;](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss)
* [2025-04-19, 02:20:06](https://news.ycombinator.com/item?id=43733683) - [CaMeL: Defeating Prompt Injections by Design](https://arxiv.org/abs/2503.18813)
* [2025-04-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss) - [Dirty Tricks 6502 Programmers Use](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss)
* [2025-04-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss) - [States are Banning Forever Chemicals. Industry is Fighting Back](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss)
* [2025-04-18, 14:34:00](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss) - [The Friendship Recession: The Lost Art of Connecting](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss)
* [2025-04-18, 11:46:09](https://news.ycombinator.com/item?id=43727158) - [Phase I/II trial of iPS-cell-derived dopaminergic cells for Parkinson&apos;s disease](https://www.nature.com/articles/s41586-025-08700-0)
* [2025-04-18, 09:52:00](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss) - [‘End of an Era’: The Last RadioShack in Maryland is Closing its Doors](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss)
* [2025-04-18, 05:07:00](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss) - [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss)
* [2025-04-18, 00:21:00](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss) - [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss)
