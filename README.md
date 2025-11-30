# [News Summary](https://kherrick.github.io/news-summary/)

## Space, Aviation, and Technology Innovations

* [Datacenters in space are a terrible, horrible, no good idea](https://taranis.ie/datacenters-in-space-are-a-terrible-horrible-no-good-idea/) - An article exploring the pitfalls and limitations of building datacenters in space.

* [System 7 natively boots on the Mac mini G4](https://macos9lives.com/smforum/index.php?topic=7711.0) - A nostalgic look at System 7 running natively on the Mac mini G4.

* [Airbus issues major A320 recall due to software issue](https://www.reuters.com/business/aerospace-defense/airbus-issues-major-a320-recall-after-flight-control-incident-2025-11-28/) - Airbus faces significant challenges as it announces a recall involving a critical software issue.

* [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - China's swift response to assist a stranded space station crew demonstrates their space program's adaptability.

* [Rare X-ray images of a 4.5-ton satellite that returned intact from space](https://www.empa.ch/web/s604/eureca-satellit-mit-roentgenmethoden-untersucht) - Incredible rare X-ray views of a satellite that returned intact.

## Open Source and Free Software Advancements

* [Zigbook is Plagiarizing the Zigtools Playground](https://zigtools.org/blog/zigbook-plagiarizing-playground/) - Controversy as Zigbook is accused of plagiarizing popular open-source project Zigtools.

* [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - Classic text-based adventure games Zork I, II, and III make their source code available to the public.

* [elf: Python CLI and library for Advent of Code with input caching and safe submissions](https://github.com/cak/elf) - A feature-rich tool for tackling the Advent of Code with Python.

* [Blender facial animation tool. What else should it do?](https://github.com/shun126/livelinkface_arkit_receiver/wiki) - Developers suggest enhancements for a Blender tool designed for facial animation.

## Artificial Intelligence Developments

* [Major AI conference flooded with peer reviews written fully by AI](https://www.nature.com/articles/d41586-025-03506-6) - An unusual and concerning trend of AI-generated peer reviews at a major conference.

* [Building AI Agents for DevOps: From CI/CD Automation to Autonomous Deployments](https://muhammadraza.me/2025/building-ai-agents-devops-automation/) - How AI is transforming DevOps practices, from automation to full autonomy.

* [Leak confirms OpenAI is preparing ads on ChatGPT for public roll out](https://www.bleepingcomputer.com/news/artificial-intelligence/leak-confirms-openai-is-preparing-ads-on-chatgpt-for-public-roll-out/) - OpenAI plans to monetize ChatGPT with ads, stirring community discussions.

## Security and Privacy

* [Landlock-ing Linux](https://blog.prizrak.me/post/landlock/) - Insights into improving Linux security using the Landlock framework.

* [Imgur Geo-Blocked the UK, So I Geo-Unblocked My Entire Network](https://blog.tymscar.com/posts/imgurukproxy/) - A technical workaround for bypassing geo-blocked content, focusing on the UK and Imgur.

* [No More Self-Censorship](https://kerrick.blog/articles/2025/confessions-of-a-software-developer-no-more-self-censorship/) - A software developer opens up about overcoming self-censorship.

## Social and Educational Trends

* [Americans no longer see four-year college degrees as worth the cost](https://www.nbcnews.com/politics/politics-news/poll-dramatic-shift-americans-no-longer-see-four-year-college-degrees-rcna243672) - The changing perception of the value of traditional higher education in the U.S.

* [Scientists Discover People Act More Altruistic When Batman Is Present](https://science.slashdot.org/story/25/11/29/2233245/scientists-discover-people-act-more-altruistic-when-batman-is-present?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A fascinating study on the psychological impact of fictional characters on human behavior.

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

* [2025-11-30, 03:53:14](https://lobste.rs/s/y6hggq/zigbook_is_plagiarizing_zigtools) - [Zigbook is Plagiarizing the Zigtools Playground](https://zigtools.org/blog/zigbook-plagiarizing-playground/)
* [2025-11-30, 02:34:00](https://linux.slashdot.org/story/25/11/30/008213/are-there-more-linux-users-than-we-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are There More Linux Users Than We Think?](https://linux.slashdot.org/story/25/11/30/008213/are-there-more-linux-users-than-we-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 02:31:37](https://lobste.rs/s/a34m1x/datacenters_space_are_terrible_horrible) - [Datacenters in space are a terrible, horrible, no good idea](https://taranis.ie/datacenters-in-space-are-a-terrible-horrible-no-good-idea/)
* [2025-11-30, 02:23:00](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss)
* [2025-11-30, 01:38:09](https://lobste.rs/s/22oqr9/landlock_ing_linux) - [Landlock-ing Linux](https://blog.prizrak.me/post/landlock/)
* [2025-11-30, 01:25:43](https://news.ycombinator.com/item?id=46092630) - [Stopping bad guys from using my open source project (feedback wanted)](https://evanhahn.com/stopping-bad-guys-from-using-my-open-source-project/)
* [2025-11-30, 01:15:59](https://news.ycombinator.com/item?id=46092558) - [Meshtastic](https://meshtastic.org/)
* [2025-11-30, 01:03:44](https://news.ycombinator.com/item?id=46092478) - [A new Little Prince museum has opened its doors in Switzerland](https://www.lepetitprince.com/en/events-around-the-world/a-new-little-prince-museum-has-opened-its-doors-in-switzerland/)
* [2025-11-30, 00:39:59](https://lobste.rs/s/heciwa/pgfirstaid_postgresql_health_check_blog) - [pgFirstAid-The PostgreSQL Health Check Blog Post](https://randoneering.tech/blog/pgfirstaid/pgfirstaid/)
* [2025-11-30, 00:16:01](https://lobste.rs/s/yaadqy/elf_python_cli_library_for_advent_code) - [elf: Python CLI and library for Advent of Code with input caching and safe submissions](https://github.com/cak/elf)
* [2025-11-30, 00:05:00](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) - [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss)
* [2025-11-29, 23:59:49](https://news.ycombinator.com/item?id=46092056) - [Dilution vs. Risk taking: Capital gains taxes and entrepreneurs](https://www.nber.org/papers/w34512)
* [2025-11-29, 23:51:21](https://news.ycombinator.com/item?id=46092000) - [Scala](https://www.huygens-fokker.org/scala/)
* [2025-11-29, 23:34:00](https://science.slashdot.org/story/25/11/29/2233245/scientists-discover-people-act-more-altruistic-when-batman-is-present?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Discover People Act More Altruistic When Batman Is Present](https://science.slashdot.org/story/25/11/29/2233245/scientists-discover-people-act-more-altruistic-when-batman-is-present?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 23:05:52](https://lobste.rs/s/bx1zij/eraser_dynamic_data_race_detector_for) - [Eraser: A Dynamic Data Race Detector for Multithreaded Programs (1997)](https://web.stanford.edu/class/archive/cs/cs240/cs240.1054/readings/Tocs97.pdf)
* [2025-11-29, 22:56:14](https://news.ycombinator.com/item?id=46091591) - [Americans no longer see four-year college degrees as worth the cost](https://www.nbcnews.com/politics/politics-news/poll-dramatic-shift-americans-no-longer-see-four-year-college-degrees-rcna243672)
* [2025-11-29, 22:34:00](https://tech.slashdot.org/story/25/11/29/0646258/defense-company-announces-an-ai-powered-dome-to-shield-cities-and-infrastructure-from-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Defense Company Announces an AI-Powered Dome to Shield Cities and Infrastructure From Attacks](https://tech.slashdot.org/story/25/11/29/0646258/defense-company-announces-an-ai-powered-dome-to-shield-cities-and-infrastructure-from-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 22:22:24](https://news.ycombinator.com/item?id=46091362) - [Bazzite: The next generation of Linux gaming](https://bazzite.gg/)
* [2025-11-29, 22:10:10](https://lobste.rs/s/psril1/computer_wants_lose_your_data_bonus_bits) - [The Computer Wants to Lose Your Data: Bonus Bits](https://blog.sinjakli.co.uk/2025/11/29/the-computer-wants-to-lose-your-data-bonus-bits/)
* [2025-11-29, 21:56:00](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss) - [Valve Announces the Steam Frame: &apos;A New Way to Play Your Entire Steam Library&apos;](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss)
* [2025-11-29, 21:34:00](https://tech.slashdot.org/story/25/11/29/2111232/the-battle-over-africas-great-untapped-resource-ip-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Battle Over Africa&apos;s Great Untapped Resource: IP Addresses](https://tech.slashdot.org/story/25/11/29/2111232/the-battle-over-africas-great-untapped-resource-ip-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 21:30:53](https://news.ycombinator.com/item?id=46090969) - [Landlock-Ing Linux](https://blog.prizrak.me/post/landlock/)
* [2025-11-29, 21:23:01](https://lobste.rs/s/seniup/clade_folding_text_editor) - [The Clade folding text editor](https://tibleiz.net/clade/)
* [2025-11-29, 21:16:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-29, 20:53:00](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss) - [Re-releasing Stories in Queue](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss)
* [2025-11-29, 20:44:24](https://news.ycombinator.com/item?id=46090619) - [Show HN: Nano PDF – A CLI Tool to Edit PDFs with Gemini&apos;s Nano Banana](https://github.com/gavrielc/Nano-PDF)
* [2025-11-29, 20:34:00](https://news.slashdot.org/story/25/11/29/207247/hundreds-of-free-software-supporters-tuned-in-for-fsf40-hackathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hundreds of Free Software Supporters Tuned in For &apos;FSF40&apos; Hackathon](https://news.slashdot.org/story/25/11/29/207247/hundreds-of-free-software-supporters-tuned-in-for-fsf40-hackathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 20:22:44](https://news.ycombinator.com/item?id=46090433) - [All it takes is for one to work out](https://alearningaday.blog/2025/11/28/all-it-takes-is-for-one-to-work-out-2/)
* [2025-11-29, 20:12:34](https://lobste.rs/s/0u9ig2/imgur_geo_blocked_uk_so_i_geo_unblocked_my) - [Imgur Geo-Blocked the UK, So I Geo-Unblocked My Entire Network](https://blog.tymscar.com/posts/imgurukproxy/)
* [2025-11-29, 19:59:12](https://news.ycombinator.com/item?id=46090294) - [The Origins of Scala (2009)](https://www.artima.com/articles/the-origins-of-scala)
* [2025-11-29, 19:55:17](https://news.ycombinator.com/item?id=46090269) - [Learning Feynman&apos;s Trick for Integrals](https://zackyzz.github.io/feynman.html)
* [2025-11-29, 19:51:29](https://lobste.rs/s/xcyhbl/building_ai_agents_for_devops_from_ci_cd) - [Building AI Agents for DevOps: From CI/CD Automation to Autonomous Deployments](https://muhammadraza.me/2025/building-ai-agents-devops-automation/)
* [2025-11-29, 19:45:04](https://lobste.rs/s/ww6cfs/major_ai_conference_flooded_with_peer) - [Major AI conference flooded with peer reviews written fully by AI](https://www.nature.com/articles/d41586-025-03506-6)
* [2025-11-29, 19:41:55](https://news.ycombinator.com/item?id=46090172) - [Be Like Clippy](https://be-clippy.com/)
* [2025-11-29, 19:34:00](https://news.slashdot.org/story/25/11/29/080250/63-of-americans-polled-say-four-year-college-degrees-arent-worth-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [63% of Americans Polled Say Four-Year College Degrees Aren&apos;t Worth the Cost](https://news.slashdot.org/story/25/11/29/080250/63-of-americans-polled-say-four-year-college-degrees-arent-worth-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 18:34:00](https://tech.slashdot.org/story/25/11/29/0727225/uber-launches-driverless-robotaxi-service-in-abu-dhabi-and-plans-many-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Launches Driverless Robotaxi Service in Abu Dhabi, and Plans Many More](https://tech.slashdot.org/story/25/11/29/0727225/uber-launches-driverless-robotaxi-service-in-abu-dhabi-and-plans-many-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 18:14:21](https://news.ycombinator.com/item?id=46089546) - [Student perceptions of AI coding assistants in learning](https://arxiv.org/abs/2507.22900)
* [2025-11-29, 17:53:57](https://news.ycombinator.com/item?id=46089394) - [Zero knowlege proof of compositeness](https://www.johndcook.com/blog/2025/11/29/zkp-composite/)
* [2025-11-29, 17:34:00](https://hardware.slashdot.org/story/25/11/29/0629207/how-bad-will-ram-and-memory-shortages-get?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Bad Will RAM and Memory Shortages Get?](https://hardware.slashdot.org/story/25/11/29/0629207/how-bad-will-ram-and-memory-shortages-get?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 17:00:23](https://news.ycombinator.com/item?id=46089008) - [AccessOwl (YC S22) Is Hiring a Technical Account Manager (IAM)](https://www.ycombinator.com/companies/accessowl/jobs/dGC3pcO-technical-account-manager-identity-access-management)
* [2025-11-29, 16:44:34](https://lobste.rs/s/qtsdoi/schubfach_smallest_state_art_double) - [Schubfach: The smallest state-of-the-art double-to-string implementation](https://vitaut.net/posts/2025/smallest-dtoa/)
* [2025-11-29, 16:41:56](https://lobste.rs/s/ycwei1/setting_wallpaper_with_less_than_250_kb) - [Setting a wallpaper with less than 250 Kb](https://www.lgfae.com/posts/2025-11-21-SettingAWallpaperWithLessThan250KB.html)
* [2025-11-29, 16:35:50](https://lobste.rs/s/uxqquq/system_7_natively_boots_on_mac_mini_g4) - [System 7 natively boots on the Mac mini G4](https://macos9lives.com/smforum/index.php?topic=7711.0)
* [2025-11-29, 16:34:00](https://tech.slashdot.org/story/25/11/29/0557235/new-hyperloop-projects-continue-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Hyperloop Projects Continue in Europe](https://tech.slashdot.org/story/25/11/29/0557235/new-hyperloop-projects-continue-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 15:43:58](https://news.ycombinator.com/item?id=46088379) - [Testing shows automotive glassbreakers can&apos;t break modern automotive glass](https://www.core77.com/posts/138925/Testing-Shows-Automotive-Glassbreakers-Cant-Break-Modern-Automotive-Glass)
* [2025-11-29, 15:34:00](https://entertainment.slashdot.org/story/25/11/29/0457250/viral-song-created-with-sunos-genai-removed-from-streaming-platforms-re-released-with-human-vocals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Viral Song Created with Suno&apos;s genAI Removed From Streaming Platforms, Re-Released With Human Vocals](https://entertainment.slashdot.org/story/25/11/29/0457250/viral-song-created-with-sunos-genai-removed-from-streaming-platforms-re-released-with-human-vocals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 14:22:18](https://lobste.rs/s/gtcrvu/langjam_gamejam_build_programming) - [Langjam Gamejam: Build a programming language then make a game with it](https://langjamgamejam.com/)
* [2025-11-29, 14:05:53](https://news.ycombinator.com/item?id=46087616) - [Datacenters in space aren&apos;t going to work](https://taranis.ie/datacenters-in-space-are-a-terrible-horrible-no-good-idea/)
* [2025-11-29, 13:59:35](https://lobste.rs/s/dw73zv/symfonycon_2025_talks_slides_code) - [SymfonyCon 2025 talks, slides and code examples are on GitHub](https://github.com/SymfonyCon/2025-talks)
* [2025-11-29, 13:00:00](https://slashdot.org/story/25/11/28/1442237/openai-partners-amass-100-billion-debt-pile-to-fund-its-ambitions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Partners Amass $100 Billion Debt Pile To Fund Its Ambitions](https://slashdot.org/story/25/11/28/1442237/openai-partners-amass-100-billion-debt-pile-to-fund-its-ambitions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 12:53:02](https://lobste.rs/s/ehcqlu/airbus_issues_major_a320_recall_due) - [Airbus issues major A320 recall due to software issue](https://www.reuters.com/business/aerospace-defense/airbus-issues-major-a320-recall-after-flight-control-incident-2025-11-28/)
* [2025-11-29, 12:26:00](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss) - [This Linux OS Has Got a Million Downloads Since Windows 10 Support Ended](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss)
* [2025-11-29, 12:25:35](https://news.ycombinator.com/item?id=46087022) - [The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary/)
* [2025-11-29, 11:31:58](https://news.ycombinator.com/item?id=46086771) - [Leak confirms OpenAI is preparing ads on ChatGPT for public roll out](https://www.bleepingcomputer.com/news/artificial-intelligence/leak-confirms-openai-is-preparing-ads-on-chatgpt-for-public-roll-out/)
* [2025-11-29, 11:00:00](https://news.slashdot.org/story/25/11/28/151231/officials-clashed-in-investigation-of-deadly-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Officials Clashed in Investigation of Deadly Air India Crash](https://news.slashdot.org/story/25/11/28/151231/officials-clashed-in-investigation-of-deadly-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 08:01:00](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Mysterious Black Fungus From Chernobyl That May Eat Radiation](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 07:43:00](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - [Americans With Four-Year Degrees Now Comprise a Record 25% of Unemployed Workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss)
* [2025-11-29, 07:26:00](https://lobste.rs/s/cljhyb/self_hosting_my_photos_with_immich) - [Self-hosting my photos with Immich](https://michael.stapelberg.ch/posts/2025-11-29-self-hosting-photos-with-immich/)
* [2025-11-29, 07:20:52](https://lobste.rs/s/7v8oy2/acmeleaf_simple_declarative_dns_01_acme) - [acmeleaf: Simple declarative DNS-01 ACME client](https://codeberg.org/lindenii/acmeleaf)
* [2025-11-29, 06:10:27](https://lobste.rs/s/dd97sm/no_more_self_censorship) - [No More Self-Censorship](https://kerrick.blog/articles/2025/confessions-of-a-software-developer-no-more-self-censorship/)
* [2025-11-29, 05:15:00](https://news.slashdot.org/story/25/11/29/0515215/airbus-issues-major-a320-recall-threatening-global-flight-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Issues Major A320 Recall, Threatening Global Flight Disruption](https://news.slashdot.org/story/25/11/29/0515215/airbus-issues-major-a320-recall-threatening-global-flight-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 05:01:00](https://apple.slashdot.org/story/25/11/28/172222/eu-to-examine-if-apple-ads-and-maps-subject-to-tough-rules-apple-says-no?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU To Examine If Apple Ads and Maps Subject To Tough Rules, Apple Says No](https://apple.slashdot.org/story/25/11/28/172222/eu-to-examine-if-apple-ads-and-maps-subject-to-tough-rules-apple-says-no?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 04:42:51](https://lobste.rs/s/hv9zpj/popping_locking_zed_theme) - [popping-and-locking-zed-theme](https://github.com/randoneering/popping-and-locking-zed-theme)
* [2025-11-29, 02:58:00](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss)
* [2025-11-28, 22:06:00](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss) - [Cryptology Firm Cancels Elections After Losing Encryption Key](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss)
* [2025-11-28, 22:02:57](https://lobste.rs/s/jxppk7/how_good_engineers_write_bad_code_at_big) - [How good engineers write bad code at big companies](https://www.seangoedecke.com/bad-code-at-big-companies/)
* [2025-11-28, 15:30:03](https://lobste.rs/s/xbsdvw/bfs_breadth_first_version_unix_find) - [bfs: A breadth-first version of the UNIX find command](https://github.com/tavianator/bfs)
* [2025-11-28, 13:57:54](https://lobste.rs/s/l77zlu/update_on_farphone_s_battery) - [An update on the farphone&apos;s battery](https://far.computer/battery-update/)
* [2025-11-28, 13:57:43](https://news.ycombinator.com/item?id=46078684) - [An update on the Farphone&apos;s battery](https://far.computer/battery-update/)
* [2025-11-28, 10:46:09](https://lobste.rs/s/60v35g/crdt_dictionary_field_guide_conflict) - [The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary)
* [2025-11-27, 17:13:51](https://news.ycombinator.com/item?id=46071221) - [Blender facial animation tool. What else should it do?](https://github.com/shun126/livelinkface_arkit_receiver/wiki)
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 18:02:45](https://news.ycombinator.com/item?id=46060432) - [Rare X-ray images of a 4.5-ton satellite that returned intact from space](https://www.empa.ch/web/s604/eureca-satellit-mit-roentgenmethoden-untersucht)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 12:57:35](https://news.ycombinator.com/item?id=46056954) - [The HTTP Query Method](https://www.ietf.org/archive/id/draft-ietf-httpbis-safe-method-w-body-14.html)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
