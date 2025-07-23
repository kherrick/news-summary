# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Hacks

* [After $380 Million Hack, Clorox Sues Its 'Service Desk' Vendor For Simply Giving Out Passwords](https://yro.slashdot.org/story/25/07/23/2018211/after-380-million-hack-clorox-sues-its-service-desk-vendor-for-simply-giving-out-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Clorox has taken legal action against its service desk vendor after alleging that lax password management practices led to a massive breach.

* [US Nuclear Weapons Agency 'Among 400 Organizations Breached By Chinese Hackers'](https://news.slashdot.org/story/25/07/23/1652240/us-nuclear-weapons-agency-among-400-organizations-breached-by-chinese-hackers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A significant breach reportedly affected the U.S. nuclear weapons agency along with numerous other organizations.

* [NPM 'accidentally' removes Stylus package, breaks builds and pipelines](https://www.bleepingcomputer.com/news/security/npm-accidentally-removes-stylus-package-breaks-builds-and-pipelines/) - Developers face setbacks as NPM removes a critical package, disrupting numerous software pipelines.

## Artificial Intelligence

* [Developing our position on AI](https://www.recurse.com/blog/191-developing-our-position-on-ai) - An exploration into the impacts and ethical considerations of advancing artificial intelligence systems.

* [Conversations Between LLMs Could Automate the Creation of Exploits, Study Shows](https://soylentnews.org/article.pl?sid=25/07/22/0833233&from=rss) - Concerns about the security implications of large language models (LLMs) engaging in exploit crafting.

* [AI overviews cause massive drop in search clicks](https://arstechnica.com/ai/2025/07/research-shows-google-ai-overviews-reduce-website-clicks-by-almost-half/) - Research shows that AI-provided search summaries significantly reduce user engagement on traditional websites.

* [You Can Now Disable All AI Features in Zed](https://zed.dev/blog/disable-ai-features) - Users of Zed now have the power to disengage all AI-driven features in this software tool.

* [FastVLM: Efficient Vision Encoding for Vision Language Models](https://machinelearning.apple.com/research/fast-vision-language-models) - Apple introduces advancements in AI models designed for vision-language interactions.

## Technology and Innovation

* [Meta Unveils Wristband That Controls Computers With Muscle Signals](https://tech.slashdot.org/story/25/07/23/1714242/meta-unveils-wristband-that-controls-computers-with-muscle-signals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new wearable from Meta promises hands-free computing via muscle signal interpretation.

* [Sony is Fighting Climate Change By Scaling Back PS5 Performance](https://games.slashdot.org/story/25/07/23/1810221/sony-is-fighting-climate-change-by-scaling-back-ps5-performance?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Sony adopts climate-conscious policy by adjusting PlayStation 5's performance.

* [TrackWeight: Use your Mac trackpad as a weighing scale](https://github.com/KrishKrosh/TrackWeight) - A creative new way to use Mac trackpads for precise measurements.

* [CARA – High precision robot dog using rope](https://www.aaedmusa.com/projects/cara) - A robot dog designed for meticulous applications showcases its impressive capabilities.

* [Building better AI tools](https://hazelweakly.me/blog/stop-building-ai-tools-backwards/) - Insights into smarter development practices for AI-integrated tools.

## Science and Environment

* [In World First, CCTV Captures Supershear Velocity Earthquake](https://science.slashdot.org/story/25/07/23/038237/in-world-first-cctv-captures-supershear-velocity-earthquake?utm_source=rss1.0mainlinkanon&utm_medium=feed) - For the first time, surveillance cameras document a supershear speed earthquake.

* [The Atomic Bomb Marker Inside Your Body](https://soylentnews.org/article.pl?sid=25/07/22/079200&from=rss) - Exploration of how fallout from nuclear testing has left unique markers in human bones.

* [Top UN Court Says Countries Can Sue Each Other Over Climate Change](https://news.slashdot.org/story/25/07/23/1741214/top-un-court-says-countries-can-sue-each-other-over-climate-change?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Groundbreaking ruling by a UN court that could reshape global climate accountability.

* [A diverse cast of rocky worlds around a small star revealed by astronomers](https://nouvelles.umontreal.ca/en/article/2025/07/22/a-udem-team-confirms-a-fifth-potentially-habitable-planet-around-l-98-59-a-red-dwarf-35-l/) - Researchers uncover potential habitable worlds orbiting a red dwarf.

* [More Than 80% of Tuvalu Seeks Australian Climate Visa](https://slashdot.org/story/25/07/23/1519243/more-than-80-of-tuvalu-seeks-australian-climate-visa?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Rising seas prompt a significant fraction of Tuvalu's population to seek Australian refugee status.

## Software Development and Tech Community

* [How we discovered, and recovered from, Postgres corruption on the matrix.org homeserver](https://matrix.org/blog/2025/07/postgres-corruption-postmortem/) - Insights into troubleshooting and recovery after database corruption issues on Matrix.org.

* [Reverse engineering GitHub Actions cache to make it fast](https://www.blacksmith.sh/blog/cache) - A deep dive into optimizing GitHub Actions' caching strategy.

* [The missing link of a bookstore's tech stack](https://bookhead.net/) - A showcase of technological innovations in the retail book sector.

* [Superfunctions: solve the "color" problem of Python](https://github.com/pomponchik/transfunctions) - New superfunctions that address specific challenges in Python development.

* [20 years of Linux on the Desktop (part 4)](https://ploum.net/2025-07-23-linux_desktop4.html) - A celebratory look at two decades of progress in desktop Linux.

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

* [2025-07-23, 21:30:00](https://yro.slashdot.org/story/25/07/23/2018211/after-380-million-hack-clorox-sues-its-service-desk-vendor-for-simply-giving-out-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After $380 Million Hack, Clorox Sues Its &apos;Service Desk&apos; Vendor For Simply Giving Out Passwords](https://yro.slashdot.org/story/25/07/23/2018211/after-380-million-hack-clorox-sues-its-service-desk-vendor-for-simply-giving-out-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 21:23:16](https://lobste.rs/s/fkukju/branch_coverage_won_t_prove_collatz) - [Branch Coverage Won&apos;t Prove The Collatz Conjecture](https://concerningquality.com/collatz-conjecture/)
* [2025-07-23, 20:51:00](https://news.slashdot.org/story/25/07/23/204215/why-247-trading-is-a-bad-idea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why 24/7 Trading is a Bad Idea](https://news.slashdot.org/story/25/07/23/204215/why-247-trading-is-a-bad-idea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 20:45:44](https://lobste.rs/s/ludz2l/implementing_dynamic_scope_for_fennel) - [Implementing dynamic scope for Fennel and Lua](https://andreyor.st/posts/2025-06-09-implementing-dynamic-scope-for-fennel-and-lua/)
* [2025-07-23, 20:45:32](https://lobste.rs/s/yd7mzj/developing_our_position_on_ai) - [Developing our position on AI](https://www.recurse.com/blog/191-developing-our-position-on-ai)
* [2025-07-23, 20:10:00](https://tech.slashdot.org/story/25/07/23/1915209/power-cuts-cable-damage-and-government-shutdowns-behind-q2-internet-outages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Power Cuts, Cable Damage, and Government Shutdowns Behind Q2 Internet Outages](https://tech.slashdot.org/story/25/07/23/1915209/power-cuts-cable-damage-and-government-shutdowns-behind-q2-internet-outages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 19:54:00](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss) - [Conversations Between LLMs Could Automate the Creation of Exploits, Study Shows](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss)
* [2025-07-23, 19:50:12](https://news.ycombinator.com/item?id=44663227) - [AI overviews cause massive drop in search clicks](https://arstechnica.com/ai/2025/07/research-shows-google-ai-overviews-reduce-website-clicks-by-almost-half/)
* [2025-07-23, 19:30:00](https://tech.slashdot.org/story/25/07/23/192212/war-on-hidden-motors-goes-undercover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [War on Hidden Motors Goes Undercover](https://tech.slashdot.org/story/25/07/23/192212/war-on-hidden-motors-goes-undercover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 19:26:42](https://news.ycombinator.com/item?id=44663003) - [AccuWeather to discontinue free access to Core Weather API](https://developer.accuweather.com/new-portal)
* [2025-07-23, 19:02:46](https://news.ycombinator.com/item?id=44662757) - [Major rule about cooking meat turns out to be wrong](https://www.seriouseats.com/meat-resting-science-11776272)
* [2025-07-23, 18:55:28](https://news.ycombinator.com/item?id=44662690) - [How to increase your surface area for luck](https://usefulfictions.substack.com/p/how-to-increase-your-surface-area)
* [2025-07-23, 18:50:00](https://games.slashdot.org/story/25/07/23/1810221/sony-is-fighting-climate-change-by-scaling-back-ps5-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony is Fighting Climate Change By Scaling Back PS5 Performance](https://games.slashdot.org/story/25/07/23/1810221/sony-is-fighting-climate-change-by-scaling-back-ps5-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 18:37:48](https://news.ycombinator.com/item?id=44662497) - [Show HN: TheProtector – Linux Bash script for the paranoid admin on a budget](https://github.com/IHATEGIVINGAUSERNAME/theProtector)
* [2025-07-23, 18:21:29](https://lobste.rs/s/sk2yop/you_can_now_disable_all_ai_features_zed) - [You Can Now Disable All AI Features in Zed](https://zed.dev/blog/disable-ai-features)
* [2025-07-23, 18:10:00](https://news.slashdot.org/story/25/07/23/1741214/top-un-court-says-countries-can-sue-each-other-over-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top UN Court Says Countries Can Sue Each Other Over Climate Change](https://news.slashdot.org/story/25/07/23/1741214/top-un-court-says-countries-can-sue-each-other-over-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 17:39:57](https://news.ycombinator.com/item?id=44661862) - [A diverse cast of rocky worlds around a small star revealed by astronomers](https://nouvelles.umontreal.ca/en/article/2025/07/22/a-udem-team-confirms-a-fifth-potentially-habitable-planet-around-l-98-59-a-red-dwarf-35-l/)
* [2025-07-23, 17:38:20](https://news.ycombinator.com/item?id=44661846) - [CARA – High precision robot dog using rope](https://www.aaedmusa.com/projects/cara)
* [2025-07-23, 17:30:00](https://tech.slashdot.org/story/25/07/23/1714242/meta-unveils-wristband-that-controls-computers-with-muscle-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Unveils Wristband That Controls Computers With Muscle Signals](https://tech.slashdot.org/story/25/07/23/1714242/meta-unveils-wristband-that-controls-computers-with-muscle-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 17:24:32](https://news.ycombinator.com/item?id=44661682) - [The Promised LAN](https://tpl.house/)
* [2025-07-23, 17:16:35](https://news.ycombinator.com/item?id=44661607) - [Interactive Programming in C (2014)](https://nullprogram.com/blog/2014/12/23/)
* [2025-07-23, 17:09:47](https://news.ycombinator.com/item?id=44661527) - [FastVLM: Efficient Vision Encoding for Vision Language Models](https://machinelearning.apple.com/research/fast-vision-language-models)
* [2025-07-23, 17:01:14](https://news.ycombinator.com/item?id=44661420) - [Optery (YC W22) Is Hiring in Engineering, Legal, Sales, Marketing (U.S., Latam)](https://www.optery.com/careers/)
* [2025-07-23, 16:59:16](https://lobste.rs/s/qpakro/promised_lan) - [The Promised LAN](https://tpl.house/)
* [2025-07-23, 16:52:00](https://news.slashdot.org/story/25/07/23/1652240/us-nuclear-weapons-agency-among-400-organizations-breached-by-chinese-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Nuclear Weapons Agency &apos;Among 400 Organizations Breached By Chinese Hackers&apos;](https://news.slashdot.org/story/25/07/23/1652240/us-nuclear-weapons-agency-among-400-organizations-breached-by-chinese-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 16:19:05](https://lobste.rs/s/lzfgwb/superfunctions_solve_color_problem) - [Superfunctions: solve the \&quot;color\&quot; problem of Python](https://github.com/pomponchik/transfunctions)
* [2025-07-23, 16:14:40](https://lobste.rs/s/x6qsw2/how_we_discovered_recovered_from) - [How we discovered, and recovered from, Postgres corruption on the matrix.org homeserver](https://matrix.org/blog/2025/07/postgres-corruption-postmortem/)
* [2025-07-23, 16:04:30](https://news.ycombinator.com/item?id=44660736) - [Show HN: The missing link of a bookstore&apos;s tech stack](https://bookhead.net/)
* [2025-07-23, 16:00:00](https://slashdot.org/story/25/07/23/1519243/more-than-80-of-tuvalu-seeks-australian-climate-visa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than 80% of Tuvalu Seeks Australian Climate Visa](https://slashdot.org/story/25/07/23/1519243/more-than-80-of-tuvalu-seeks-australian-climate-visa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 15:45:15](https://news.ycombinator.com/item?id=44660519) - [You can now disable all AI features in Zed](https://zed.dev/blog/disable-ai-features)
* [2025-07-23, 15:37:40](https://news.ycombinator.com/item?id=44660437) - [Neil Armstrong&apos;s customs form for moon rocks (2016)](https://magazine.uc.edu/editors_picks/recent_features/armstrong/moonrocks.html)
* [2025-07-23, 15:28:58](https://news.ycombinator.com/item?id=44660323) - [US AI Action Plan](https://www.ai.gov/action-plan)
* [2025-07-23, 15:22:00](https://slashdot.org/story/25/07/23/152244/white-house-unveils-action-plan-to-accelerate-ai-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [White House Unveils Action Plan To Accelerate AI Development](https://slashdot.org/story/25/07/23/152244/white-house-unveils-action-plan-to-accelerate-ai-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 15:10:00](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss) - [Microsoft Wants to Find Out Why Windows 11 is So Slow](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss)
* [2025-07-23, 14:56:31](https://news.ycombinator.com/item?id=44659921) - [Building better AI tools](https://hazelweakly.me/blog/stop-building-ai-tools-backwards/)
* [2025-07-23, 14:45:00](https://apple.slashdot.org/story/25/07/23/1445216/applecare-one-lets-users-insure-multiple-apple-devices-for-1999-accepts-four-year-old-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AppleCare One Lets Users Insure Multiple Apple Devices For $19.99, Accepts Four-Year-Old Hardware](https://apple.slashdot.org/story/25/07/23/1445216/applecare-one-lets-users-insure-multiple-apple-devices-for-1999-accepts-four-year-old-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 14:35:04](https://lobste.rs/s/w2l7hb/migrating_zfs_pool_from_raidz1_raidz2) - [Migrating a ZFS pool from RAIDZ1 to RAIDZ2](https://mtlynch.io/raidz1-to-raidz2/)
* [2025-07-23, 14:31:47](https://lobste.rs/s/uemodw/using_radicle_ci_for_development) - [Using Radicle CI for Development](https://radicle.xyz/2025/07/23/using-radicle-ci-for-development)
* [2025-07-23, 14:04:00](https://news.slashdot.org/story/25/07/23/144223/europes-resistance-to-air-conditioning-is-softening-due-to-climate-change-and-recent-heat-waves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Resistance To Air Conditioning is Softening Due To Climate Change and Recent Heat Waves](https://news.slashdot.org/story/25/07/23/144223/europes-resistance-to-air-conditioning-is-softening-due-to-climate-change-and-recent-heat-waves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 14:01:50](https://lobste.rs/s/2i7to2/npm_accidentally_removes_stylus_package) - [NPM &apos;accidentally&apos; removes Stylus package, breaks builds and pipelines](https://www.bleepingcomputer.com/news/security/npm-accidentally-removes-stylus-package-breaks-builds-and-pipelines/)
* [2025-07-23, 13:52:47](https://news.ycombinator.com/item?id=44659251) - [Why Elixir? Common misconceptions](https://matthewsinclair.com/blog/0181-why-elixir)
* [2025-07-23, 13:27:38](https://news.ycombinator.com/item?id=44659019) - [What to expect from Debian/Trixie](https://michael-prokop.at/blog/2025/07/20/what-to-expect-from-debian-trixie-newintrixie/)
* [2025-07-23, 13:23:49](https://news.ycombinator.com/item?id=44658978) - [Manticore Search: Fast, efficient, drop-in replacement for Elasticsearch](https://github.com/manticoresoftware/manticoresearch)
* [2025-07-23, 13:17:43](https://news.ycombinator.com/item?id=44658909) - [Reverse engineering GitHub Actions cache to make it fast](https://www.blacksmith.sh/blog/cache)
* [2025-07-23, 13:17:38](https://news.ycombinator.com/item?id=44658908) - [Cops say criminals use a Google Pixel with GrapheneOS – I say that&apos;s freedom](https://www.androidauthority.com/why-i-use-grapheneos-on-pixel-3575477/)
* [2025-07-23, 13:06:54](https://lobste.rs/s/5hr5yn/computational_tyranny) - [Computational Tyranny](https://happyfellow.bearblog.dev/computational-tyranny/)
* [2025-07-23, 13:00:55](https://lobste.rs/s/c53kzb/20_years_linux_on_desktop_part_4) - [20 years of Linux on the Desktop (part 4)](https://ploum.net/2025-07-23-linux_desktop4.html)
* [2025-07-23, 13:00:00](https://slashdot.org/story/25/07/23/0317227/openai-ceo-tells-federal-reserve-confab-that-entire-job-categories-will-disappear-due-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI CEO Tells Federal Reserve Confab That Entire Job Categories Will Disappear Due To AI](https://slashdot.org/story/25/07/23/0317227/openai-ceo-tells-federal-reserve-confab-that-entire-job-categories-will-disappear-due-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 12:24:54](https://lobste.rs/s/dtmziw/trackweight_use_your_mac_trackpad_as) - [TrackWeight: Use your Mac trackpad as a weighing scale](https://github.com/KrishKrosh/TrackWeight)
* [2025-07-23, 11:32:31](https://lobste.rs/s/ixfukh/font_size_adjust_is_useful) - [font-size-adjust Is Useful](https://matklad.github.io/2025/07/16/font-size-adjust.html)
* [2025-07-23, 11:19:26](https://lobste.rs/s/lsww5q/building_systems_simply) - [Building Systems, Simply](https://www.youtube.com/watch?v=jVC4DP-8xLM)
* [2025-07-23, 10:24:00](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss) - [The Atomic Bomb Marker Inside Your Body](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss)
* [2025-07-23, 10:19:00](https://lobste.rs/s/25kvql/what_is_x_forwarded_for_when_can_you_trust) - [What is X-Forwarded-For and when can you trust it?](https://httptoolkit.com/blog/what-is-x-forwarded-for/)
* [2025-07-23, 10:01:00](https://news.slashdot.org/story/25/07/22/232218/uk-to-ban-public-sector-orgs-from-paying-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK To Ban Public Sector Orgs From Paying Ransomware Gangs](https://news.slashdot.org/story/25/07/22/232218/uk-to-ban-public-sector-orgs-from-paying-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 09:00:29](https://lobste.rs/s/9tmoou/what_expect_from_debian_trixie) - [What to expect from Debian/trixie](https://michael-prokop.at/blog/2025/07/20/what-to-expect-from-debian-trixie-newintrixie/)
* [2025-07-23, 08:30:00](https://science.slashdot.org/story/25/07/23/038237/in-world-first-cctv-captures-supershear-velocity-earthquake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In World First, CCTV Captures Supershear Velocity Earthquake](https://science.slashdot.org/story/25/07/23/038237/in-world-first-cctv-captures-supershear-velocity-earthquake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 05:52:14](https://lobste.rs/s/wghfos/extending_emacs_with_fennel_2024) - [Extending Emacs with Fennel (2024)](https://andreyor.st/posts/2024-12-20-extending-emacs-with-fennel/)
* [2025-07-23, 05:35:00](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss) - [Matson Suspends Shipping EVs Citing Hazards of Lithium-ion Batteries](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss)
* [2025-07-23, 04:08:10](https://lobste.rs/s/txrjel/is_it_feasible_start_local_forum_2025) - [Is it feasible to start a local forum in 2025?](https://lobste.rs/s/txrjel/is_it_feasible_start_local_forum_2025)
* [2025-07-23, 03:36:36](https://lobste.rs/s/gsvrwc/ai_coding_agents_are_removing) - [AI Coding Agents Are Removing Programming Language Barriers](https://railsatscale.com/2025-07-19-ai-coding-agents-are-removing-programming-language-barriers/)
* [2025-07-23, 00:54:00](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) - [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss)
* [2025-07-22, 22:22:15](https://lobste.rs/s/itpokq/python_3_14_release_candidate_1_is_go) - [Python 3.14 release candidate 1 is go](https://pythoninsider.blogspot.com/2025/07/python-314-release-candidate-1-is-go.html)
* [2025-07-22, 21:20:16](https://news.ycombinator.com/item?id=44653136) - [Vector Tiles are deployed on OpenStreetMap.org](https://blog.openstreetmap.org/2025/07/22/vector-tiles-are-deployed-on-openstreetmap-org/)
* [2025-07-22, 20:09:00](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss) - [Popular Sugar Substitute Linked to Brain Cell Damage and Stroke Risk](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss)
* [2025-07-22, 19:14:59](https://lobste.rs/s/3eonsv/more_than_you_wanted_know_about_how_game) - [More than you wanted to know about how Game Boy cartridges work](https://abc.decontextualize.com/more-than-you-wanted-to-know/)
* [2025-07-22, 18:48:00](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss) - [RIP - Ozzy Osborne](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss)
* [2025-07-22, 16:50:09](https://lobste.rs/s/5u6ydr/tailwind_is_worst_all_worlds) - [Tailwind is the Worst of All Worlds](https://colton.dev/blog/tailwind-is-the-worst-of-all-worlds/)
* [2025-07-22, 15:22:00](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss)
* [2025-07-22, 13:40:34](https://lobste.rs/s/j1hijj/todos_aren_t_for_doing) - [TODOs aren’t for doing](https://sophiebits.com/2025/07/21/todos-arent-for-doing)
* [2025-07-22, 10:50:17](https://lobste.rs/s/0ab7g3/comparing_glove80_maltron_keyboards) - [Comparing the Glove80 and Maltron keyboards](https://tratt.net/laurie/blog/2025/comparing_the_glove80_and_maltron_keyboards.html)
* [2025-07-22, 10:33:00](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss) - [Microsoft Says It Will No Longer Use Engineers in China for Department of Defense Work](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
* [2025-07-21, 20:19:00](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 05:28:15](https://news.ycombinator.com/item?id=44632045) - [SIMD Perlin Noise: Beating the Compiler with SSE (2014)](https://scallywag.software/vim/blog/simd-perlin-noise-i)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-21, 00:49:29](https://news.ycombinator.com/item?id=44630801) - [The First Photograph Ever Taken (1826)](https://www.openculture.com/2025/07/the-first-photograph-ever-taken.html)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 15:51:15](https://news.ycombinator.com/item?id=44626359) - [Checklists are hard, but still a good thing](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/ChecklistsAreHardButGood)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 08:11:09](https://news.ycombinator.com/item?id=44622954) - [Using uninitialized memory for fun and profit (2008)](https://research.swtch.com/sparse)
* [2025-07-20, 07:02:03](https://news.ycombinator.com/item?id=44622637) - [AI groups spend to replace low-cost &apos;data labellers&apos; with high-paid experts](https://www.ft.com/content/e17647f0-4c3b-49b4-a031-b56158bbb3b8)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-19, 22:28:06](https://news.ycombinator.com/item?id=44620020) - [How YouTube won the battle for TV viewers](https://www.wsj.com/business/media/how-youtube-won-the-battle-for-tv-viewers-346d05b8)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
