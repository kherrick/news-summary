# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [The Battle Over Africa's Great Untapped Resource: IP Addresses](https://tech.slashdot.org/story/25/11/29/2111232/the-battle-over-africas-great-untapped-resource-ip-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discussion centers on the growing demand and contention over IP address allocation in Africa, one of the most underutilized regions in this regard.

* [Building AI Agents for DevOps: From CI/CD Automation to Autonomous Deployments](https://muhammadraza.me/2025/building-ai-agents-devops-automation/) - Explores steps to integrate AI into DevOps practices, enabling automation and even autonomous deployments.

* [The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary/) - A practical guide to understanding and implementing CRDTs (Conflict-Free Replicated Data Types) for synchronization in distributed systems.

## Artificial Intelligence

* [Major AI conference flooded with peer reviews written fully by AI](https://www.nature.com/articles/d41586-025-03506-6) - Concerns rise as peer reviews generated entirely by AI overwhelm a major AI conference.

* [Student Perceptions of AI Coding Assistants in Learning](https://arxiv.org/abs/2507.22900) - A study discussing how students are using and perceiving AI-powered coding tools to aid their learning processes.

* [OpenAI Partners Amass $100 Billion Debt Pile To Fund Its Ambitions](https://slashdot.org/story/25/11/28/1442237/openai-partners-amass-100-billion-debt-pile-to-fund-its-ambitions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlights the extensive financial investments by OpenAI's partners to accelerate AI development.

## Climate and Environment

* [Iceland declares ocean-current instability a national security risk](https://edition.cnn.com/2025/11/15/climate/iceland-warming-current-amoc-collapse-threat) - Iceland emphasizes the security implications of potential collapses in ocean currents due to climate change.

* [The Mysterious Black Fungus From Chernobyl That May Eat Radiation](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Covers research on a unique fungus from Chernobyl capable of feeding on radiation, with significant potential for bioremediation.

* [Australia Risks 2035 Climate Goal Without Bigger Emissions Cuts](https://news.slashdot.org/story/25/11/28/1654207/australia-risks-2035-climate-goal-without-bigger-emissions-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Warns that insufficient emissions reductions could derail Australia's climate objectives for 2035.

## Aviation

* [Airbus issues major A320 recall due to software issue](https://www.reuters.com/business/aerospace-defense/airbus-issues-major-a320-recall-after-flight-control-incident-2025-11-28/) - Airbus calls for a significant recall of A320 jets, citing a software issue that led to a flight control incident.

* [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - Highlights China’s expedited mission to support astronauts stranded at their space station.

## Education and Careers

* [63% of Americans Polled say Four-Year College Degrees Aren't Worth the Cost](https://news.slashdot.org/story/25/11/29/080250/63-of-americans-polled-say-four-year-college-degrees-arent-worth-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Poll results reveal waning confidence in the value of four-year college degrees in America.

* [Americans With Four-Year Degrees Now Comprise a Record 25% of Unemployed Workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - Reports an unprecedented percentage of unemployed individuals with four-year college degrees.

## Software and Tools

* [Nano PDF – A CLI Tool to Edit PDFs with Gemini's Nano Banana](https://github.com/gavrielc/Nano-PDF) - A lightweight command-line tool for PDF editing, built with user simplicity in mind.

* [System 7 natively boots on the Mac mini G4](https://macos9lives.com/smforum/index.php?topic=7711.0) - Retrocomputing enthusiasts achieve native booting of Apple’s System 7 on a Mac mini G4.

## Historical and Science Insights

* [Scientists Think They've Solved Why One of History's Most Advanced Civilizations Vanished](https://science.slashdot.org/story/25/11/28/1721249/scientists-think-theyve-solved-why-one-of-historys-most-advanced-civilizations-vanished?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Article delves into new findings regarding the decline of a historically advanced civilization.

* [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - Details the amusing origin of the modern emoticon, born from a mistake in a physics discussion.

## Open Source and Developer Highlights

* [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - The iconic text-based adventure game series embraces open-source availability.

* [WinApps: Run Windows apps as if they were a part of the native Linux OS](https://github.com/winapps-org/winapps) - Introducing a tool enabling seamless integration of Windows applications into Linux environments.

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

* [2025-11-29, 21:45:59](https://lobste.rs/s/bsm3ck/nomor_call_center_agoda_layanan_agoda) - [Nomor Call Center Agoda: Layanan Agoda Reschedule - Bantuan Pelanggan Agoda](https://sites.google.com/view/nomor-call-center-agoda/bio)
* [2025-11-29, 21:43:21](https://lobste.rs/s/2vfiaq/layanan_agoda_reschedule) - [Layanan Agoda Reschedule](https://lobste.rs/s/2vfiaq/layanan_agoda_reschedule)
* [2025-11-29, 21:34:00](https://tech.slashdot.org/story/25/11/29/2111232/the-battle-over-africas-great-untapped-resource-ip-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Battle Over Africa&apos;s Great Untapped Resource: IP Addresses](https://tech.slashdot.org/story/25/11/29/2111232/the-battle-over-africas-great-untapped-resource-ip-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 21:23:01](https://lobste.rs/s/seniup/clade_folding_text_editor) - [The Clade folding text editor](https://tibleiz.net/clade/)
* [2025-11-29, 21:16:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-29, 21:10:15](https://news.ycombinator.com/item?id=46090794) - [Europe&apos;s New War on Privacy](https://unherd.com/2025/11/europes-new-war-on-privacy/)
* [2025-11-29, 20:53:00](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss) - [Re-releasing Stories in Queue](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss)
* [2025-11-29, 20:44:24](https://news.ycombinator.com/item?id=46090619) - [Show HN: Nano PDF – A CLI Tool to Edit PDFs with Gemini&apos;s Nano Banana](https://github.com/gavrielc/Nano-PDF)
* [2025-11-29, 20:37:59](https://news.ycombinator.com/item?id=46090574) - [Joe Armstrong interviews Alan Kay (2016) [video]](https://www.youtube.com/watch?v=fhOHn9TClXY)
* [2025-11-29, 20:34:00](https://news.slashdot.org/story/25/11/29/207247/hundreds-of-free-software-supporters-tuned-in-for-fsf40-hackathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hundreds of Free Software Supporters Tuned in For &apos;FSF40&apos; Hackathon](https://news.slashdot.org/story/25/11/29/207247/hundreds-of-free-software-supporters-tuned-in-for-fsf40-hackathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 20:22:44](https://news.ycombinator.com/item?id=46090433) - [All it takes is for one to work out](https://alearningaday.blog/2025/11/28/all-it-takes-is-for-one-to-work-out-2/)
* [2025-11-29, 20:12:37](https://news.ycombinator.com/item?id=46090372) - [Baboon: Data Modeling with Automatic Evolutions and tagless binary codecs](https://github.com/7mind/baboon)
* [2025-11-29, 20:12:34](https://lobste.rs/s/0u9ig2/imgur_geo_blocked_uk_so_i_geo_unblocked_my) - [Imgur Geo-Blocked the UK, So I Geo-Unblocked My Entire Network](https://blog.tymscar.com/posts/imgurukproxy/)
* [2025-11-29, 19:59:12](https://news.ycombinator.com/item?id=46090294) - [The Origins of Scala (2009)](https://www.artima.com/articles/the-origins-of-scala)
* [2025-11-29, 19:57:57](https://lobste.rs/s/dtylzc/origins_scala_2009) - [The Origins of Scala (2009)](https://www.artima.com/articles/the-origins-of-scala)
* [2025-11-29, 19:55:17](https://news.ycombinator.com/item?id=46090269) - [Learning Feynman&apos;s Trick for Integrals](https://zackyzz.github.io/feynman.html)
* [2025-11-29, 19:51:29](https://lobste.rs/s/xcyhbl/building_ai_agents_for_devops_from_ci_cd) - [Building AI Agents for DevOps: From CI/CD Automation to Autonomous Deployments](https://muhammadraza.me/2025/building-ai-agents-devops-automation/)
* [2025-11-29, 19:45:04](https://lobste.rs/s/ww6cfs/major_ai_conference_flooded_with_peer) - [Major AI conference flooded with peer reviews written fully by AI](https://www.nature.com/articles/d41586-025-03506-6)
* [2025-11-29, 19:41:55](https://news.ycombinator.com/item?id=46090172) - [Be Like Clippy](https://be-clippy.com/)
* [2025-11-29, 19:34:00](https://news.slashdot.org/story/25/11/29/080250/63-of-americans-polled-say-four-year-college-degrees-arent-worth-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [63% of Americans Polled say Four-Year College Degrees Aren&apos;t Worth the Cost](https://news.slashdot.org/story/25/11/29/080250/63-of-americans-polled-say-four-year-college-degrees-arent-worth-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 19:18:46](https://news.ycombinator.com/item?id=46090009) - [Ported freetype, fontconfig, harfbuzz, and graphite to Fil-C](https://twitter.com/filpizlo/status/1994563191528198653)
* [2025-11-29, 19:14:13](https://news.ycombinator.com/item?id=46089980) - [Framework Computer Now Sponsoring LVFS / Fwupd Development](https://www.phoronix.com/news/Framework-Sponsoring-LVFS)
* [2025-11-29, 19:12:48](https://news.ycombinator.com/item?id=46089971) - [Electric vehicle sales are booming in South America – without Tesla](https://www.reuters.com/sustainability/climate-energy/electric-vehicle-sales-are-booming-south-america-without-tesla-2025-11-17/)
* [2025-11-29, 18:34:00](https://tech.slashdot.org/story/25/11/29/0727225/uber-launches-driverless-robotaxi-service-in-abu-dhabi-and-plans-many-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Launches Driverless Robotaxi Service in Abu Dhabi, and Plans Many More](https://tech.slashdot.org/story/25/11/29/0727225/uber-launches-driverless-robotaxi-service-in-abu-dhabi-and-plans-many-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 18:14:21](https://news.ycombinator.com/item?id=46089546) - [Student Perceptions of AI Coding Assistants in Learning](https://arxiv.org/abs/2507.22900)
* [2025-11-29, 17:53:57](https://news.ycombinator.com/item?id=46089394) - [Zero knowlege proof of compositeness](https://www.johndcook.com/blog/2025/11/29/zkp-composite/)
* [2025-11-29, 17:34:00](https://hardware.slashdot.org/story/25/11/29/0629207/how-bad-will-ram-and-memory-shortages-get?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Bad Will RAM and Memory Shortages Get?](https://hardware.slashdot.org/story/25/11/29/0629207/how-bad-will-ram-and-memory-shortages-get?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 17:00:23](https://news.ycombinator.com/item?id=46089008) - [AccessOwl (YC S22) Is Hiring a Technical Account Manager (IAM)](https://www.ycombinator.com/companies/accessowl/jobs/dGC3pcO-technical-account-manager-identity-access-management)
* [2025-11-29, 16:44:34](https://lobste.rs/s/qtsdoi/schubfach_smallest_state_art_double) - [Schubfach: The smallest state-of-the-art double-to-string implementation](https://vitaut.net/posts/2025/smallest-dtoa/)
* [2025-11-29, 16:41:56](https://lobste.rs/s/ycwei1/setting_wallpaper_with_less_than_250_kb) - [Setting a wallpaper with less than 250 Kb](https://www.lgfae.com/posts/2025-11-21-SettingAWallpaperWithLessThan250KB.html)
* [2025-11-29, 16:35:50](https://lobste.rs/s/uxqquq/system_7_natively_boots_on_mac_mini_g4) - [System 7 natively boots on the Mac mini G4](https://macos9lives.com/smforum/index.php?topic=7711.0)
* [2025-11-29, 16:34:00](https://tech.slashdot.org/story/25/11/29/0557235/new-hyperloop-projects-continue-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Hyperloop Projects Continue in Europe](https://tech.slashdot.org/story/25/11/29/0557235/new-hyperloop-projects-continue-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 16:05:37](https://lobste.rs/s/d9ionb/context_plumbing) - [Context plumbing](https://interconnected.org/home/2025/11/28/plumbing)
* [2025-11-29, 15:34:00](https://entertainment.slashdot.org/story/25/11/29/0457250/viral-song-created-with-sunos-genai-removed-from-streaming-platforms-re-released-with-human-vocals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Viral Song Created with Suno&apos;s genAI Removed From Streaming Platforms, Re-Released With Human Vocals](https://entertainment.slashdot.org/story/25/11/29/0457250/viral-song-created-with-sunos-genai-removed-from-streaming-platforms-re-released-with-human-vocals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 15:21:29](https://news.ycombinator.com/item?id=46088192) - [Iceland declares ocean-current instability a national security risk](https://edition.cnn.com/2025/11/15/climate/iceland-warming-current-amoc-collapse-threat)
* [2025-11-29, 14:22:18](https://lobste.rs/s/gtcrvu/langjam_gamejam_build_programming) - [Langjam Gamejam: Build a programming language then make a game with it](https://langjamgamejam.com/)
* [2025-11-29, 14:02:23](https://news.ycombinator.com/item?id=46087596) - [DNS LOC Record (2014)](https://blog.cloudflare.com/the-weird-and-wonderful-world-of-dns-loc-records/)
* [2025-11-29, 13:59:35](https://lobste.rs/s/dw73zv/symfonycon_2025_talks_slides_code) - [SymfonyCon 2025 talks, slides and code examples are on GitHub](https://github.com/SymfonyCon/2025-talks)
* [2025-11-29, 13:56:04](https://news.ycombinator.com/item?id=46087549) - [Hachi: An Image Search Engine](https://eagledot.xyz/hachi.md.html)
* [2025-11-29, 13:00:00](https://slashdot.org/story/25/11/28/1442237/openai-partners-amass-100-billion-debt-pile-to-fund-its-ambitions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Partners Amass $100 Billion Debt Pile To Fund Its Ambitions](https://slashdot.org/story/25/11/28/1442237/openai-partners-amass-100-billion-debt-pile-to-fund-its-ambitions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 12:53:02](https://lobste.rs/s/ehcqlu/airbus_issues_major_a320_recall_due) - [Airbus issues major A320 recall due to software issue](https://www.reuters.com/business/aerospace-defense/airbus-issues-major-a320-recall-after-flight-control-incident-2025-11-28/)
* [2025-11-29, 12:26:00](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss) - [This Linux OS Has Got a Million Downloads Since Windows 10 Support Ended](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss)
* [2025-11-29, 12:25:35](https://news.ycombinator.com/item?id=46087022) - [The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary/)
* [2025-11-29, 11:00:00](https://news.slashdot.org/story/25/11/28/151231/officials-clashed-in-investigation-of-deadly-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Officials Clashed in Investigation of Deadly Air India Crash](https://news.slashdot.org/story/25/11/28/151231/officials-clashed-in-investigation-of-deadly-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 08:01:00](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Mysterious Black Fungus From Chernobyl That May Eat Radiation](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 07:43:00](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - [Americans With Four-Year Degrees Now Comprise a Record 25% of Unemployed Workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss)
* [2025-11-29, 07:26:00](https://lobste.rs/s/cljhyb/self_hosting_my_photos_with_immich) - [Self-hosting my photos with Immich](https://michael.stapelberg.ch/posts/2025-11-29-self-hosting-photos-with-immich/)
* [2025-11-29, 07:20:52](https://lobste.rs/s/7v8oy2/acmeleaf_simple_declarative_dns_01_acme) - [acmeleaf: Simple declarative DNS-01 ACME client](https://codeberg.org/lindenii/acmeleaf)
* [2025-11-29, 06:10:27](https://lobste.rs/s/dd97sm/no_more_self_censorship) - [No More Self-Censorship](https://kerrick.blog/articles/2025/confessions-of-a-software-developer-no-more-self-censorship/)
* [2025-11-29, 05:15:00](https://news.slashdot.org/story/25/11/29/0515215/airbus-issues-major-a320-recall-threatening-global-flight-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Issues Major A320 Recall, Threatening Global Flight Disruption](https://news.slashdot.org/story/25/11/29/0515215/airbus-issues-major-a320-recall-threatening-global-flight-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 05:01:00](https://apple.slashdot.org/story/25/11/28/172222/eu-to-examine-if-apple-ads-and-maps-subject-to-tough-rules-apple-says-no?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU To Examine If Apple Ads and Maps Subject To Tough Rules, Apple Says No](https://apple.slashdot.org/story/25/11/28/172222/eu-to-examine-if-apple-ads-and-maps-subject-to-tough-rules-apple-says-no?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 04:46:18](https://lobste.rs/s/ltpdkh/adventures_with_chimera_linux) - [Adventures with Chimera Linux](https://blog.xiaket.org/2025/chimera.html)
* [2025-11-29, 04:42:51](https://lobste.rs/s/hv9zpj/popping_locking_zed_theme) - [popping-and-locking-zed-theme](https://github.com/randoneering/popping-and-locking-zed-theme)
* [2025-11-29, 03:26:01](https://news.ycombinator.com/item?id=46084956) - [System 7 natively boots on the Mac mini G4](https://macos9lives.com/smforum/index.php?topic=7711.0)
* [2025-11-29, 02:58:00](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss)
* [2025-11-29, 02:02:00](https://science.slashdot.org/story/25/11/28/1721249/scientists-think-theyve-solved-why-one-of-historys-most-advanced-civilizations-vanished?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Think They&apos;ve Solved Why One of History&apos;s Most Advanced Civilizations Vanished](https://science.slashdot.org/story/25/11/28/1721249/scientists-think-theyve-solved-why-one-of-historys-most-advanced-civilizations-vanished?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 23:35:00](https://slashdot.org/story/25/11/28/1636212/china-netherlands-chip-fight-turns-into-corporate-civil-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China-Netherlands Chip Fight Turns Into Corporate Civil War](https://slashdot.org/story/25/11/28/1636212/china-netherlands-chip-fight-turns-into-corporate-civil-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 22:06:00](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss) - [Cryptology Firm Cancels Elections After Losing Encryption Key](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss)
* [2025-11-28, 22:02:57](https://lobste.rs/s/jxppk7/how_good_engineers_write_bad_code_at_big) - [How good engineers write bad code at big companies](https://www.seangoedecke.com/bad-code-at-big-companies/)
* [2025-11-28, 21:40:21](https://news.ycombinator.com/item?id=46083004) - [Airbus A320 – intense solar radiation may corrupt data critical for flight](https://www.airbus.com/en/newsroom/press-releases/2025-11-airbus-update-on-a320-family-precautionary-fleet-action)
* [2025-11-28, 21:31:00](https://news.slashdot.org/story/25/11/28/1654207/australia-risks-2035-climate-goal-without-bigger-emissions-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Risks 2035 Climate Goal Without Bigger Emissions Cuts](https://news.slashdot.org/story/25/11/28/1654207/australia-risks-2035-climate-goal-without-bigger-emissions-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 21:20:38](https://lobste.rs/s/0nveim/brief_history_nsa_backdoors_2013) - [A Brief History of NSA Backdoors (2013)](https://www.ethanheilman.com/x/12/index.html)
* [2025-11-28, 15:59:49](https://lobste.rs/s/0i4chy/don_t_tug_on_you_never_know_what_it_might_be) - [Don&apos;t tug on that, you never know what it might be attached to (2016)](https://blog.plover.com/2016/07/01/#tmpdir)
* [2025-11-28, 15:30:03](https://lobste.rs/s/xbsdvw/bfs_breadth_first_version_unix_find) - [bfs: A breadth-first version of the UNIX find command](https://github.com/tavianator/bfs)
* [2025-11-28, 13:57:54](https://lobste.rs/s/l77zlu/update_on_farphone_s_battery) - [An update on the farphone&apos;s battery](https://far.computer/battery-update/)
* [2025-11-28, 13:57:43](https://news.ycombinator.com/item?id=46078684) - [An update on the Farphone&apos;s battery](https://far.computer/battery-update/)
* [2025-11-28, 10:46:09](https://lobste.rs/s/60v35g/crdt_dictionary_field_guide_conflict) - [The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary)
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 18:02:45](https://news.ycombinator.com/item?id=46060432) - [Rare X-ray images of a 4.5-ton satellite that returned intact from space](https://www.empa.ch/web/s604/eureca-satellit-mit-roentgenmethoden-untersucht)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 13:22:46](https://news.ycombinator.com/item?id=46057141) - [Post-mortem of Shai-Hulud attack on November 24th, 2025](https://posthog.com/blog/nov-24-shai-hulud-attack-post-mortem)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 07:40:43](https://news.ycombinator.com/item?id=46055091) - [Plinko PIR Tutorial](https://vitalik.eth.limo/general/2025/11/25/plinko.html)
* [2025-11-26, 07:03:27](https://news.ycombinator.com/item?id=46054879) - [Anthony Bourdain&apos;s Lost Li.st&apos;s](https://bourdain.greg.technology/)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 21:12:55](https://news.ycombinator.com/item?id=46050861) - [Men Who Made America&apos;s Self-Made Man](https://www.historynewsnetwork.org/article/self-made)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 12:34:25](https://news.ycombinator.com/item?id=46045207) - [WinApps: Run Windows apps as if they were a part of the native Linux OS](https://github.com/winapps-org/winapps)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
