# [News Summary](https://kherrick.github.io/news-summary/)

## Geolocation and Connectivity

* [Precise geolocation via Wi-Fi Positioning System](https://www.amoses.dev/blog/wifi-location/) - Techniques to pinpoint exact location using Wi-Fi data have significantly advanced, raising both practical applications and privacy concerns. [Comments](https://lobste.rs/s/jzflsc/precise_geolocation_via_wi_fi).

* [Apple N1 Wi-Fi Chip Improves On Older Broadcom Chips In Every Way](https://hardware.slashdot.org/story/25/11/19/2228257/apple-n1-wi-fi-chip-improves-on-older-broadcom-chips-in-every-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple's new chip offers groundbreaking enhancements in connectivity and efficiency. [Comments](https://hardware.slashdot.org/story/25/11/19/2228257/apple-n1-wi-fi-chip-improves-on-older-broadcom-chips-in-every-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## AI Developments and Usage Concerns

* [Jailbreaking AI Models to Phish Elderly Victims](https://simonlermen.substack.com/p/can-ai-models-be-jailbroken-to-phish) - Research into how AI models could be exploited for phishing older people. [Comments](https://news.ycombinator.com/item?id=45987252).

* [Adobe Bolsters AI Marketing Tools With $1.9 Billion Semrush Buy](https://slashdot.org/story/25/11/19/2238242/adobe-bolsters-ai-marketing-tools-with-19-billion-semrush-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Adobe's acquisition strategy revolutionizes AI-driven marketing solutions. [Comments](https://slashdot.org/story/25/11/19/2238242/adobe-bolsters-ai-marketing-tools-with-19-billion-semrush-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Saudi Makes Big Bet On AI Films As Hollywood Moves From Studios To Datacenters](https://entertainment.slashdot.org/story/25/11/19/2216207/saudi-makes-big-bet-on-ai-films-as-hollywood-moves-from-studios-to-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AI-driven filmmaking could transform the entertainment landscape. [Comments](https://entertainment.slashdot.org/story/25/11/19/2216207/saudi-makes-big-bet-on-ai-films-as-hollywood-moves-from-studios-to-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Technology and Cybersecurity

* [Verifying your Matrix devices is becoming mandatory](https://element.io/blog/verifying-your-devices-is-becoming-mandatory-2/) - Verification protocols in Matrix devices aim to improve security standards. [Comments](https://news.ycombinator.com/item?id=45987179).

* [Researchers discover security vulnerability in WhatsApp](https://www.univie.ac.at/en/news/detail/forscherinnen-entdecken-grosse-sicherheitsluecke-in-whatsapp) - Major vulnerability found, sparking discussion on WhatsApp's security measures. [Comments](https://news.ycombinator.com/item?id=45985036).

* [The patent office is about to make bad patents untouchable](https://www.eff.org/deeplinks/2025/11/patent-office-about-make-bad-patents-untouchable) - Concerns arise as changes to patent laws might protect flawed patents. [Comments](https://news.ycombinator.com/item?id=45985890).

## Industry Updates and Economic Impacts

* [Workday to Acquire Pipedream](https://newsroom.workday.com/2025-11-19-Workday-Signs-Definitive-Agreement-to-Acquire-Pipedream) - Workday's acquisition expands its tech portfolio and service capabilities. [Comments](https://news.ycombinator.com/item?id=45987220).

* [Nvidia Beats Earnings Expectations, Even As Bubble Concerns Mount](https://slashdot.org/story/25/11/19/2223211/nvidia-beats-earnings-expectations-even-as-bubble-concerns-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Nvidia triumphs financially despite skepticism on market sustainability. [Comments](https://slashdot.org/story/25/11/19/2223211/nvidia-beats-earnings-expectations-even-as-bubble-concerns-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Static Web Hosting on the Intel N150: FreeBSD, SmartOS, NetBSD, OpenBSD and Linux Compared](https://it-notes.dragas.net/2025/11/19/static-web-hosting-intel-n150-freebsd-smartos-netbsd-openbsd-linux/) - Comprehensive comparison of operating systems for efficient hosting. [Comments](https://news.ycombinator.com/item?id=45982162).

## Health and Safety

* [Ultra-Processed Food is Global Health Threat, Researchers Warn](https://science.slashdot.org/story/25/11/19/1813215/ultra-processed-food-is-global-health-threat-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Studies show alarming risks linked with ultra-processed foods. [Comments](https://science.slashdot.org/story/25/11/19/1813215/ultra-processed-food-is-global-health-threat-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [New Antibiotic Could Be a Breakthrough in Treatment for Killer TB, Trial Suggests](https://science.slashdot.org/story/25/11/19/1820223/new-antibiotic-could-be-a-breakthrough-in-treatment-for-killer-tb-trial-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Promising advancements in tuberculosis treatment from clinical trials. [Comments](https://science.slashdot.org/story/25/11/19/1820223/new-antibiotic-could-be-a-breakthrough-in-treatment-for-killer-tb-trial-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

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

* [2025-11-20, 01:20:59](https://lobste.rs/s/jzflsc/precise_geolocation_via_wi_fi) - [Precise geolocation via Wi-Fi Positioning System](https://www.amoses.dev/blog/wifi-location/)
* [2025-11-20, 00:45:00](https://yro.slashdot.org/story/25/11/19/2247224/tokyo-court-finds-cloudflare-liable-for-manga-piracy-in-long-running-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tokyo Court Finds Cloudflare Liable For Manga Piracy in Long-Running Lawsuit](https://yro.slashdot.org/story/25/11/19/2247224/tokyo-court-finds-cloudflare-liable-for-manga-piracy-in-long-running-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 00:32:17](https://news.ycombinator.com/item?id=45987252) - [Jailbreaking AI Models to Phish Elderly Victims](https://simonlermen.substack.com/p/can-ai-models-be-jailbroken-to-phish)
* [2025-11-20, 00:27:22](https://news.ycombinator.com/item?id=45987220) - [Workday to Acquire Pipedream](https://newsroom.workday.com/2025-11-19-Workday-Signs-Definitive-Agreement-to-Acquire-Pipedream)
* [2025-11-20, 00:22:03](https://news.ycombinator.com/item?id=45987179) - [Verifying your Matrix devices is becoming mandatory](https://element.io/blog/verifying-your-devices-is-becoming-mandatory-2/)
* [2025-11-20, 00:02:50](https://news.ycombinator.com/item?id=45987027) - [Linux Career Opportunities in 2025: Skills in High Demand](https://www.linuxcareers.com/resources/blog/2025/11/linux-career-opportunities-in-2025-skills-in-high-demand/)
* [2025-11-20, 00:02:00](https://slashdot.org/story/25/11/19/2238242/adobe-bolsters-ai-marketing-tools-with-19-billion-semrush-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Bolsters AI Marketing Tools With $1.9 Billion Semrush Buy](https://slashdot.org/story/25/11/19/2238242/adobe-bolsters-ai-marketing-tools-with-19-billion-semrush-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 23:23:00](https://hardware.slashdot.org/story/25/11/19/2228257/apple-n1-wi-fi-chip-improves-on-older-broadcom-chips-in-every-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple N1 Wi-Fi Chip Improves On Older Broadcom Chips In Every Way](https://hardware.slashdot.org/story/25/11/19/2228257/apple-n1-wi-fi-chip-improves-on-older-broadcom-chips-in-every-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 23:21:45](https://lobste.rs/s/uoekej/we_re_now_moving_from_openbsd_freebsd_for) - [We&apos;re (now) moving from OpenBSD to FreeBSD for firewalls](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/OpenBSDToFreeBSDMove)
* [2025-11-19, 22:45:00](https://entertainment.slashdot.org/story/25/11/19/2216207/saudi-makes-big-bet-on-ai-films-as-hollywood-moves-from-studios-to-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Saudi Makes Big Bet On AI Films As Hollywood Moves From Studios To Datacenters](https://entertainment.slashdot.org/story/25/11/19/2216207/saudi-makes-big-bet-on-ai-films-as-hollywood-moves-from-studios-to-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 22:24:00](https://slashdot.org/story/25/11/19/2223211/nvidia-beats-earnings-expectations-even-as-bubble-concerns-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Beats Earnings Expectations, Even As Bubble Concerns Mount](https://slashdot.org/story/25/11/19/2223211/nvidia-beats-earnings-expectations-even-as-bubble-concerns-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 22:16:41](https://lobste.rs/s/amboaj/disallow_code_usage_with_custom_clippy) - [Disallow code usage with a custom `clippy.toml`](https://www.schneems.com/2025/11/19/find-accidental-code-usage-with-a-custom-clippytoml/)
* [2025-11-19, 22:08:06](https://news.ycombinator.com/item?id=45985978) - [Tailscale Down](https://status.tailscale.com/incidents/01KAF1H8V7EGFKVG5KGZBB2RJC)
* [2025-11-19, 22:07:00](https://slashdot.org/story/25/11/19/225253/dutch-hand-back-control-of-chinese-owned-chipmaker-nexperia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dutch Hand Back Control of Chinese-Owned Chipmaker Nexperia](https://slashdot.org/story/25/11/19/225253/dutch-hand-back-control-of-chinese-owned-chipmaker-nexperia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 22:00:28](https://news.ycombinator.com/item?id=45985890) - [The patent office is about to make bad patents untouchable](https://www.eff.org/deeplinks/2025/11/patent-office-about-make-bad-patents-untouchable)
* [2025-11-19, 21:53:24](https://news.ycombinator.com/item?id=45985799) - [Roblox Requires Age Checks for Communication, Ushering in New Safety Standard](https://corp.roblox.com/newsroom/2025/11/roblox-requires-age-checks-limits-minor-and-adult-chat)
* [2025-11-19, 21:30:02](https://news.ycombinator.com/item?id=45985506) - [Gaming on Linux has never been more approachable](https://www.theverge.com/tech/823337/switching-linux-gaming-desktop-cachyos)
* [2025-11-19, 21:22:00](https://tech.slashdot.org/story/25/11/19/186230/can-chinese-made-buses-be-hacked-norway-drove-one-down-a-mine-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Chinese-Made Buses Be Hacked? Norway Drove One Down a Mine To Find Out](https://tech.slashdot.org/story/25/11/19/186230/can-chinese-made-buses-be-hacked-norway-drove-one-down-a-mine-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 21:07:05](https://news.ycombinator.com/item?id=45985196) - [How Slide Rules Work](https://amenzwa.github.io/stem/ComputingHistory/HowSlideRulesWork/)
* [2025-11-19, 20:55:30](https://news.ycombinator.com/item?id=45985036) - [Researchers discover security vulnerability in WhatsApp](https://www.univie.ac.at/en/news/detail/forscherinnen-entdecken-grosse-sicherheitsluecke-in-whatsapp)
* [2025-11-19, 20:42:00](https://science.slashdot.org/story/25/11/19/1820223/new-antibiotic-could-be-a-breakthrough-in-treatment-for-killer-tb-trial-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Antibiotic Could Be a Breakthrough in Treatment for Killer TB, Trial Suggests](https://science.slashdot.org/story/25/11/19/1820223/new-antibiotic-could-be-a-breakthrough-in-treatment-for-killer-tb-trial-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 20:26:43](https://news.ycombinator.com/item?id=45984659) - [Loose wire leads to blackout, contact with Francis Scott Key bridge](https://www.ntsb.gov:443/news/press-releases/Pages/NR20251118.aspx)
* [2025-11-19, 20:23:47](https://news.ycombinator.com/item?id=45984623) - [Racing karts on a Rust GPU kernel driver](https://www.collabora.com/news-and-blog/news-and-events/racing-karts-on-a-rust-gpu-kernel-driver.html)
* [2025-11-19, 20:09:16](https://lobste.rs/s/qauaqt/llms_are_bullshitters_doesn_t_mean_they_re) - [LLMs are bullshitters. But that doesn&apos;t mean they&apos;re not useful](https://blog.kagi.com/llms)
* [2025-11-19, 20:01:52](https://lobste.rs/s/ywczyh/function_inliner_for_wasmtime_cranelift) - [A Function Inliner for Wasmtime and Cranelift](https://fitzgen.com/2025/11/19/inliner.html)
* [2025-11-19, 20:01:02](https://news.ycombinator.com/item?id=45984353) - [Cognitive and mental health correlates of short-form video use](https://psycnet.apa.org/fulltext/2026-89350-001.html)
* [2025-11-19, 20:01:00](https://science.slashdot.org/story/25/11/19/1813215/ultra-processed-food-is-global-health-threat-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ultra-Processed Food is Global Health Threat, Researchers Warn](https://science.slashdot.org/story/25/11/19/1813215/ultra-processed-food-is-global-health-threat-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 19:50:55](https://lobste.rs/s/z7hwno/building_with_distributed_actors_what) - [Building with Distributed Actors: What and Why](https://withblue.ink/2025/11/19/distributed-actors-model.html)
* [2025-11-19, 19:44:46](https://news.ycombinator.com/item?id=45984143) - [The Death of Arduino?](https://www.linkedin.com/posts/adafruit_opensource-privacy-techpolicy-activity-7396903362237054976-r14H)
* [2025-11-19, 19:39:09](https://news.ycombinator.com/item?id=45984072) - [Pozsar&apos;s Bretton Woods III: The Framework](https://philippdubach.com/2025/10/25/pozsars-bretton-woods-iii-the-framework-1/2/)
* [2025-11-19, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss) - [Big Tech Wants Direct Access to Our Brains](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss)
* [2025-11-19, 19:25:00](https://it.slashdot.org/story/25/11/19/189236/europes-cookie-nightmare-is-crumbling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Cookie Nightmare is Crumbling](https://it.slashdot.org/story/25/11/19/189236/europes-cookie-nightmare-is-crumbling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 18:42:54](https://lobste.rs/s/0m6yln/what_killed_perl) - [What Killed Perl?](https://entropicthoughts.com/what-killed-perl)
* [2025-11-19, 18:40:00](https://developers.slashdot.org/story/25/11/19/1832208/linus-torvalds-says-vibe-coding-is-fine-for-getting-started-horrible-idea-for-maintenance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Says Vibe Coding is Fine For Getting Started, &apos;Horrible Idea&apos; For Maintenance](https://developers.slashdot.org/story/25/11/19/1832208/linus-torvalds-says-vibe-coding-is-fine-for-getting-started-horrible-idea-for-maintenance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 18:21:40](https://lobste.rs/s/idtphq/twenty_years_django_releases) - [Twenty years of Django releases](https://www.djangoproject.com/weblog/2025/nov/19/twenty-years-of-django-releases/)
* [2025-11-19, 18:08:18](https://lobste.rs/s/vwdvly/are_large_language_models_worth_it) - [Are large language models worth it?](https://nicholas.carlini.com/writing/2025/are-llms-worth-it.html)
* [2025-11-19, 18:03:00](https://news.slashdot.org/story/25/11/19/1745251/uk-to-ban-the-resale-of-tickets-for-profit-to-protect-fans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK To Ban the Resale of Tickets For Profit To Protect Fans](https://news.slashdot.org/story/25/11/19/1745251/uk-to-ban-the-resale-of-tickets-for-profit-to-protect-fans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 18:01:59](https://news.ycombinator.com/item?id=45982649) - [Building more with GPT-5.1-Codex-Max](https://openai.com/index/gpt-5-1-codex-max/)
* [2025-11-19, 17:22:46](https://news.ycombinator.com/item?id=45982162) - [Static Web Hosting on the Intel N150: FreeBSD, SmartOS, NetBSD, OpenBSD and Linu](https://it-notes.dragas.net/2025/11/19/static-web-hosting-intel-n150-freebsd-smartos-netbsd-openbsd-linux/)
* [2025-11-19, 17:20:00](https://slashdot.org/story/25/11/19/1635239/the-growing-problem-with-chinas-unreliable-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Growing Problem With China&apos;s Unreliable Numbers](https://slashdot.org/story/25/11/19/1635239/the-growing-problem-with-chinas-unreliable-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 17:14:51](https://news.ycombinator.com/item?id=45982073) - [Meta Segment Anything Model 3](https://ai.meta.com/sam3/)
* [2025-11-19, 16:44:00](https://hardware.slashdot.org/story/25/11/19/1622209/more-than-60-us-and-canadian-police-units-now-use-boston-dynamics-robot-dog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than 60 US and Canadian Police Units Now Use Boston Dynamics&apos; Robot Dog](https://hardware.slashdot.org/story/25/11/19/1622209/more-than-60-us-and-canadian-police-units-now-use-boston-dynamics-robot-dog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 16:30:58](https://lobste.rs/s/gdwxd5/why_bsds) - [Why BSDs?](https://blog.thechases.com/posts/why-bsds/)
* [2025-11-19, 16:25:32](https://lobste.rs/s/t7mtqi/inside_global_campaign_hijacking_open) - [Inside a global campaign hijacking open-source project identities](https://www.fullstory.com/blog/inside-a-global-campaign-hijacking-open-source-project-identities/)
* [2025-11-19, 16:18:32](https://lobste.rs/s/liq0sa/specialized_csv_readers_for_rust) - [Specialized CSV readers for Rust leveraging hybrid SIMD techniques](https://docs.rs/simd-csv)
* [2025-11-19, 16:05:00](https://science.slashdot.org/story/25/11/19/1540212/cdc-data-confirms-us-is-2-months-away-from-losing-measles-elimination-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CDC Data Confirms US is 2 Months Away From Losing Measles Elimination Status](https://science.slashdot.org/story/25/11/19/1540212/cdc-data-confirms-us-is-2-months-away-from-losing-measles-elimination-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 15:43:43](https://lobste.rs/s/1ckynu/vibesdk_open_source_vibe_coding_platform) - [vibesdk: An open-source vibe coding platform that helps you build your own vibe-coding platform, built entirely on Cloudflare stack](https://github.com/cloudflare/vibesdk)
* [2025-11-19, 15:28:04](https://news.ycombinator.com/item?id=45980760) - [Launch HN: Mosaic (YC W25) – Agentic Video Editing](https://mosaic.so)
* [2025-11-19, 14:49:00](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss) - [FPGA Based IBM-PC-XT](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss)
* [2025-11-19, 14:41:30](https://news.ycombinator.com/item?id=45980117) - [Europe is scaling back GDPR and relaxing AI laws](https://www.theverge.com/news/823750/european-union-ai-act-gdpr-changes)
* [2025-11-19, 14:03:35](https://lobste.rs/s/jlf6y8/what_makes_intro_crafting_interpreters) - [What Makes the Intro to Crafting Interpreters so Good?](https://refactoringenglish.com/blog/crafting-interpreters-intro/)
* [2025-11-19, 13:16:23](https://news.ycombinator.com/item?id=45979190) - [Larry Summers resigns from OpenAI board](https://www.cnbc.com/2025/11/19/larry-summers-epstein-openai.html)
* [2025-11-19, 12:21:33](https://lobste.rs/s/6ufew7/hachi_image_search_engine) - [Hachi:  An Image search engine](https://eagledot.xyz/hachi.md.html)
* [2025-11-19, 12:17:50](https://lobste.rs/s/rifpe8/lost_cause_lisp_machines) - [The lost cause of the Lisp machines](https://www.tfeb.org/fragments/2025/11/18/the-lost-cause-of-the-lisp-machines/)
* [2025-11-19, 11:45:51](https://news.ycombinator.com/item?id=45978423) - [Thunderbird adds native Microsoft Exchange email support](https://blog.thunderbird.net/2025/11/thunderbird-adds-native-microsoft-exchange-email-support/)
* [2025-11-19, 10:25:25](https://news.ycombinator.com/item?id=45977900) - [What Killed Perl?](https://entropicthoughts.com/what-killed-perl)
* [2025-11-19, 10:01:00](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss) - [Canonical Extends Ubuntu Support to 15 Years](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss)
* [2025-11-19, 10:00:05](https://news.ycombinator.com/item?id=45977744) - [A $1k AWS mistake](https://www.geocod.io/code-and-coordinates/2025-11-18-the-1000-aws-mistake/)
* [2025-11-19, 09:10:07](https://lobste.rs/s/gj8uup/static_web_hosting_on_intel_n150_freebsd) - [Static Web Hosting on the Intel N150: FreeBSD, SmartOS, NetBSD, OpenBSD and Linux Compared](https://it-notes.dragas.net/2025/11/19/static-web-hosting-intel-n150-freebsd-smartos-netbsd-openbsd-linux/)
* [2025-11-19, 07:36:25](https://news.ycombinator.com/item?id=45976832) - [Exploring the limits of large language models as quant traders](https://nof1.ai/blog/TechPost1)
* [2025-11-19, 05:16:00](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - [Mozilla Unveils Plans for New &apos;AI Window&apos; Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss)
* [2025-11-19, 02:54:20](https://lobste.rs/s/nac5wa/cloudflare_outage_on_november_18_2025) - [Cloudflare outage on November 18, 2025](https://blog.cloudflare.com/18-november-2025-outage/)
* [2025-11-19, 00:31:00](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss)
* [2025-11-18, 22:54:48](https://lobste.rs/s/hhuu5z/experiment_making_typescript_immutable) - [Experiment: making TypeScript immutable-by-default](https://evanhahn.com/typescript-immutability-experiment/)
* [2025-11-18, 22:41:52](https://lobste.rs/s/0r5kmb/month_chat_oriented_programming) - [A Month of Chat-Oriented Programming](https://checkeagle.com/checklists/njr/a-month-of-chat-oriented-programming/)
* [2025-11-18, 22:34:33](https://lobste.rs/s/pmsbte/self_hosting_dns_for_no_fun_little_profit) - [Self-hosting DNS for no fun, but a little profit](https://linderud.dev/blog/self-hosting-dns-for-no-fun-but-a-little-profit/)
* [2025-11-18, 19:50:34](https://lobste.rs/s/1rluks/surprise_with_how_handles_its_program) - [A surprise with how &apos;#!&apos; handles its program argument in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/ShebangRelativePathSurprise?showcomments)
* [2025-11-18, 19:47:00](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss) - [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss)
* [2025-11-18, 15:04:00](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss) - [The Data Center Resistance Has Arrived](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss)
* [2025-11-18, 15:01:46](https://lobste.rs/s/lqsrgo/announcing_lix_2_94_acai_na_tigela) - [Announcing Lix 2.94 “Açaí na tigela”](https://lix.systems/blog/2025-11-18-lix-2.94-release/)
* [2025-11-18, 14:19:46](https://lobste.rs/s/wtnzei/rebecca_heineman_from_homelessness) - [Rebecca Heineman - from homelessness to porting Doom](https://corecursive.com/doomed-to-fail-with-burger-becky/)
* [2025-11-18, 10:23:00](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss) - [Google Settlement With Epic Caps Play Store Fees, Boosts Other Android App Stores](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss)
* [2025-11-18, 09:16:15](https://lobste.rs/s/t37jcs/my_next_chapter_with_mastodon) - [My next chapter with Mastodon](https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/)
* [2025-11-18, 05:37:00](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss)
* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
* [2025-11-17, 20:14:00](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss) - [Microsoft: the Company Doesn&apos;t Have Enough Electricity to Install All the AI GPUs in its Inventory](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss)
* [2025-11-17, 15:33:00](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss) - [Lawmakers Want to Ban VPNs—And They Have No Idea What They&apos;re Doing](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss)
* [2025-11-17, 10:44:00](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss) - [NVIDIA 580.105.08 Linux Graphics Driver Released With a New Environment Variable](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss)
* [2025-11-17, 06:01:00](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)
* [2025-11-17, 01:14:00](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss) - [Devuan Version 6.0 \&quot;Excalibur\&quot; is Available Now](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss)
* [2025-11-16, 20:28:00](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss) - [Youtube Ads - Legal Advice Required](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss)
* [2025-11-16, 15:45:00](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss) - [This Rare ‘Mad Honey’ is Only Found in Two Places in the World](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss)
* [2025-11-16, 10:58:00](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss) - [AI Resistance: Who Says No to AI and Why?](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss)
* [2025-11-16, 06:17:00](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss)
* [2025-11-16, 01:36:00](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss) - [FreeBSD: Reproducible Rootless Builds and Moving From Windows to This Linux Chaos Alternative](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss)
