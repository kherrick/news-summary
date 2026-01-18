# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Developments

* [China Builds 'Hypergravity' Machine 2,000X Stronger Than Earth](https://science.slashdot.org/story/26/01/17/214244/china-builds-hypergravity-machine-2000x-stronger-than-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/01/17/214244/china-builds-hypergravity-machine-2000x-stronger-than-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Could We Provide Better Cellphone Service With Fewer, Bigger Satellites?](https://science.slashdot.org/story/26/01/18/0035242/could-we-provide-better-cellphone-service-with-fewer-bigger-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/01/18/0035242/could-we-provide-better-cellphone-service-with-fewer-bigger-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss))

## AI and Machine Learning Insights

* [AI companies will fail. We can salvage something from the wreckage](https://www.theguardian.com/us-news/ng-interactive/2026/jan/18/tech-ai-bubble-burst-reverse-centaur) ([comments](https://news.ycombinator.com/item?id=46668170))

* [The A in AGI Stands for Ads](https://ossa-ma.github.io/blog/openads) ([comments](https://news.ycombinator.com/item?id=46668021))

* [How Much Do AI Models Resemble a Brain?](https://slashdot.org/story/26/01/17/2350259/how-much-do-ai-models-resemble-a-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/01/17/2350259/how-much-do-ai-models-resemble-a-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Notable Programming and Infrastructure

* [some C habits I employ for the modern day](https://www.unix.dog/~yosh/blog/c-habits-for-me.html) ([comments](https://lobste.rs/s/b6veve/some_c_habits_i_employ_for_modern_day))

* [Daniel's first 20,000 curl commits](https://daniel.haxx.se/blog/2026/01/17/my-first-20000-curl-commits/) ([comments](https://lobste.rs/s/x6nwl5/daniel_s_first_20_000_curl_commits))

* [Installing Android on the Nintendo Switch](https://blog.omgmog.net/post/android-on-the-nintendo-switch/) ([comments](https://lobste.rs/s/iz3wsu/installing_android_on_nintendo_switch))

## Cultural Perspectives

* [Why the Tech World Thinks the American Dream Is Dying](https://www.wsj.com/tech/ai/why-the-tech-world-thinks-the-american-dream-is-dying-daf793dc) ([comments](https://news.ycombinator.com/item?id=46668394))

* [Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/) ([comments](https://lobste.rs/s/0pxvyd/agent_psychosis_are_we_going_insane))

* [What is Plan 9?](https://fqa.9front.org/fqa0.html#0.1) ([comments](https://news.ycombinator.com/item?id=46667675))

## Miscellaneous Highlights

* [Wormholes May Not Exist—We've Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss))

* [ASCII characters are not pixels: a deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering) ([comments](https://lobste.rs/s/vp39cr/ascii_characters_are_not_pixels_deep_dive))

* [Keystone (YC S25) Is Hiring](https://news.ycombinator.com/item?id=46667101)

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

* [2026-01-18, 16:11:31](https://lobste.rs/s/iz3wsu/installing_android_on_nintendo_switch) - [Installing Android on the Nintendo Switch](https://blog.omgmog.net/post/android-on-the-nintendo-switch/)
* [2026-01-18, 15:49:59](https://lobste.rs/s/b6veve/some_c_habits_i_employ_for_modern_day) - [some C habits I employ for the modern day](https://www.unix.dog/~yosh/blog/c-habits-for-me.html)
* [2026-01-18, 15:34:00](https://science.slashdot.org/story/26/01/17/214244/china-builds-hypergravity-machine-2000x-stronger-than-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Builds &apos;Hypergravity&apos; Machine 2,000X Stronger Than Earth](https://science.slashdot.org/story/26/01/17/214244/china-builds-hypergravity-machine-2000x-stronger-than-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 15:09:37](https://news.ycombinator.com/item?id=46668394) - [Why the Tech World Thinks the American Dream Is Dying](https://www.wsj.com/tech/ai/why-the-tech-world-thinks-the-american-dream-is-dying-daf793dc)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 14:45:37](https://news.ycombinator.com/item?id=46668170) - [AI companies will fail. We can salvage something from the wreckage](https://www.theguardian.com/us-news/ng-interactive/2026/jan/18/tech-ai-bubble-burst-reverse-centaur)
* [2026-01-18, 14:25:49](https://news.ycombinator.com/item?id=46668021) - [The A in AGI Stands for Ads](https://ossa-ma.github.io/blog/openads)
* [2026-01-18, 13:32:25](https://news.ycombinator.com/item?id=46667675) - [What is Plan 9?](https://fqa.9front.org/fqa0.html#0.1)
* [2026-01-18, 12:34:00](https://science.slashdot.org/story/26/01/18/0035242/could-we-provide-better-cellphone-service-with-fewer-bigger-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could We Provide Better Cellphone Service With Fewer, Bigger Satellites?](https://science.slashdot.org/story/26/01/18/0035242/could-we-provide-better-cellphone-service-with-fewer-bigger-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 12:00:10](https://news.ycombinator.com/item?id=46667101) - [Keystone (YC S25) Is Hiring](https://news.ycombinator.com/item?id=46667101)
* [2026-01-18, 11:39:14](https://news.ycombinator.com/item?id=46666963) - [Starting from scratch: Training a 30M Topological Transformer](https://www.tuned.org.uk/posts/013_the_topological_transformer_training_tauformer)
* [2026-01-18, 11:02:03](https://lobste.rs/s/0pxvyd/agent_psychosis_are_we_going_insane) - [Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 09:36:25](https://news.ycombinator.com/item?id=46666288) - [A free and open-source rootkit for Linux](https://lwn.net/SubscriberLink/1053099/19c2e8180aeb0438/)
* [2026-01-18, 09:35:19](https://news.ycombinator.com/item?id=46666283) - [Consent-O-Matic](https://github.com/cavi-au/Consent-O-Matic)
* [2026-01-18, 09:35:02](https://lobste.rs/s/m5u098/clan_2025_wrap_up_from_infrastructure_new) - [Clan 2025 Wrap-Up: From Infrastructure to a New Computing Paradigm](https://clan.lol/blog/2025-wrap-up/)
* [2026-01-18, 09:26:39](https://lobste.rs/s/x6nwl5/daniel_s_first_20_000_curl_commits) - [Daniel&apos;s first 20,000 curl commits](https://daniel.haxx.se/blog/2026/01/17/my-first-20000-curl-commits/)
* [2026-01-18, 09:08:12](https://lobste.rs/s/aegd9e/gnome_village) - [The Gnome Village](https://happihacking.com/blog/posts/2025/the-gnome-village/)
* [2026-01-18, 08:58:40](https://news.ycombinator.com/item?id=46666085) - [Command-line Tools can be 235x Faster than your Hadoop Cluster (2014)](https://adamdrake.com/command-line-tools-can-be-235x-faster-than-your-hadoop-cluster.html)
* [2026-01-18, 08:54:00](https://slashdot.org/story/26/01/18/0631239/retailers-rush-to-implement-ai-assisted-shopping-and-orders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retailers Rush to Implement AI-Assisted Shopping and Orders](https://slashdot.org/story/26/01/18/0631239/retailers-rush-to-implement-ai-assisted-shopping-and-orders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 08:18:08](https://lobste.rs/s/4wr7ye/social_filesystem) - [A Social Filesystem](https://overreacted.io/a-social-filesystem/)
* [2026-01-18, 07:14:10](https://lobste.rs/s/cuvmci/air_traffic_control_ibm_9020) - [air traffic control: the IBM 9020](https://computer.rip/2026-01-17-air-traffic-control-9020.html)
* [2026-01-18, 06:53:36](https://news.ycombinator.com/item?id=46665411) - [Iconify: Library of Open Source Icons](https://icon-sets.iconify.design/)
* [2026-01-18, 06:47:17](https://news.ycombinator.com/item?id=46665393) - [Show HN: GibRAM an in-memory ephemeral GraphRAG runtime for retrieval](https://github.com/gibram-io/gibram)
* [2026-01-18, 06:27:24](https://news.ycombinator.com/item?id=46665310) - [ThinkNext Design](https://thinknextdesign.com/home.html)
* [2026-01-18, 05:59:00](https://news.slashdot.org/story/26/01/18/0556221/53-of-crypto-tokens-launched-since-2021-have-failed-most-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [53% of Crypto Tokens Launched Since 2021 Have Failed, Most in 2025](https://news.slashdot.org/story/26/01/18/0556221/53-of-crypto-tokens-launched-since-2021-have-failed-most-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 05:55:48](https://news.ycombinator.com/item?id=46665169) - [Show HN: Figma-use – CLI to control Figma for AI agents](https://github.com/dannote/figma-use)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 04:24:48](https://lobste.rs/s/vokwbo/jquery_4_0_0_released) - [jQuery 4.0.0 Released](https://blog.jquery.com/2026/01/17/jquery-4-0-0/)
* [2026-01-18, 04:23:28](https://news.ycombinator.com/item?id=46664755) - [jQuery 4](https://blog.jquery.com/2026/01/17/jquery-4-0-0/)
* [2026-01-18, 03:49:29](https://news.ycombinator.com/item?id=46664638) - [The longest Greek word](https://en.wikipedia.org/wiki/Lopado%C2%ADtemacho%C2%ADselacho%C2%ADgaleo%C2%ADkranio%C2%ADleipsano%C2%ADdrim%C2%ADhypo%C2%ADtrimmato%C2%ADsilphio%C2%ADkarabo%C2%ADmelito%C2%ADkatakechy%C2%ADmeno%C2%ADkichl%C2%ADepi%C2%ADkossypho%C2%ADphatto%C2%ADperister%C2%ADalektryon%C2%ADopte%C2%ADkephallio%C2%ADkigklo%C2%ADpeleio%C2%ADlagoio%C2%ADsiraio%C2%ADbaphe%C2%ADtragano%C2%ADpterygon)
* [2026-01-18, 03:48:03](https://news.ycombinator.com/item?id=46664631) - [Erdos 281 solved with ChatGPT 5.2 Pro](https://twitter.com/neelsomani/status/2012695714187325745)
* [2026-01-18, 02:34:00](https://slashdot.org/story/26/01/17/2350259/how-much-do-ai-models-resemble-a-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Much Do AI Models Resemble a Brain?](https://slashdot.org/story/26/01/17/2350259/how-much-do-ai-models-resemble-a-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 02:31:24](https://lobste.rs/s/mihtmk/vaultgemma_differentially_private_llm) - [VaultGemma: A differentially private LLM](https://arxiv.org/pdf/2510.15001)
* [2026-01-18, 02:17:25](https://news.ycombinator.com/item?id=46664195) - [Profession by Isaac Asimov (1957)](https://www.abelard.org/asimov.php)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
* [2026-01-18, 00:07:19](https://lobste.rs/s/evuzid/more_http_3_focus_one_backend_less) - [More HTTP/3 focus, one backend less](https://daniel.haxx.se/blog/2026/01/17/more-http-3-focus-one-backend-less/)
* [2026-01-17, 23:47:16](https://news.ycombinator.com/item?id=46663338) - [If you put Apple icons in reverse it looks like someone getting good at design](https://mastodon.social/@heliographe_studio/115890819509545391)
* [2026-01-17, 23:41:00](https://science.slashdot.org/story/26/01/17/2317222/2026s-breakthrough-technologies-mit-technology-review-chooses-sodium-ion-batteries-commercial-space-stations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2026&apos;s Breakthrough Technologies? MIT Technology Review Chooses Sodium-ion Batteries,  Commercial Space Stations](https://science.slashdot.org/story/26/01/17/2317222/2026s-breakthrough-technologies-mit-technology-review-chooses-sodium-ion-batteries-commercial-space-stations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 23:38:21](https://news.ycombinator.com/item?id=46663268) - [No knives, only cook knives](https://kellykozakandjoshdonald.substack.com/p/no-knives-only-cook-knives)
* [2026-01-17, 22:41:00](https://it.slashdot.org/story/26/01/17/2150219/predator-spyware-turns-failed-attacks-into-intelligence-for-future-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Predator Spyware Turns Failed Attacks Into Intelligence For Future Exploits](https://it.slashdot.org/story/26/01/17/2150219/predator-spyware-turns-failed-attacks-into-intelligence-for-future-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 22:39:28](https://lobste.rs/s/dtir1a/why_we_ve_tried_replace_developers_every) - [Why We&apos;ve Tried to Replace Developers Every Decade Since 1969](https://www.caimito.net/en/blog/2025/12/07/the-recurring-dream-of-replacing-developers.html)
* [2026-01-17, 21:41:00](https://it.slashdot.org/story/26/01/17/194230/to-pressure-security-professionals-mandiant-releases-database-that-cracks-weak-ntlm-passwords-in-12-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [To Pressure Security Professionals, Mandiant Releases Database That Cracks Weak NTLM Passwords in 12 Hours](https://it.slashdot.org/story/26/01/17/194230/to-pressure-security-professionals-mandiant-releases-database-that-cracks-weak-ntlm-passwords-in-12-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 21:35:44](https://lobste.rs/s/hntdgv/if_writing_code_is_easy_part_why_would_i) - [If writing the code is the easy part, why would I want someone else to write it?](https://tldraw.dev/blog/stay-away-from-my-trash)
* [2026-01-17, 21:07:03](https://lobste.rs/s/31iwyd/malware_peddlers_are_now_hijacking_snap) - [Malware Peddlers Are Now Hijacking Snap Publisher Domains](https://blog.popey.com/2026/01/malware-purveyors-taking-over-published-snap-email-domains/)
* [2026-01-17, 20:44:52](https://news.ycombinator.com/item?id=46661897) - [Kip: A programming language based on grammatical cases of Turkish](https://github.com/kip-dili/kip)
* [2026-01-17, 20:41:00](https://news.slashdot.org/story/26/01/17/0444252/two-more-offshore-wind-projects-in-the-us-allowed-to-continue-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two More Offshore Wind Projects in the US Allowed to Continue Construction](https://news.slashdot.org/story/26/01/17/0444252/two-more-offshore-wind-projects-in-the-us-allowed-to-continue-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 20:26:23](https://lobste.rs/s/xkgzk4/how_many_pixels_do_you_really_need) - [How Many Pixels Do You Really Need?](https://rldane.space/how-many-pixels-do-you-really-need.html)
* [2026-01-17, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - [&apos;Society Cannot Function If No One is Accountable for AI&apos; — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss)
* [2026-01-17, 19:34:00](https://news.slashdot.org/story/26/01/17/089219/dozens-of-us-colleges-close-as-falling-birth-rate-pushes-them-off-enrollment-cliff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dozens of US Colleges Close as Falling Birth Rate Pushes Them Off Enrollment Cliff](https://news.slashdot.org/story/26/01/17/089219/dozens-of-us-colleges-close-as-falling-birth-rate-pushes-them-off-enrollment-cliff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 19:03:58](https://lobste.rs/s/wjbvwq/ai_plays_rollercoaster_tycoon) - [AI Plays Rollercoaster Tycoon](https://labs.ramp.com/rct)
* [2026-01-17, 18:54:14](https://lobste.rs/s/60yo7s/rust_s_culture_semantic_precision) - [Rust&apos;s Culture of Semantic Precision](https://www.alilleybrinker.com/mini/rusts-culture-of-semantic-precision/)
* [2026-01-17, 18:34:00](https://science.slashdot.org/story/26/01/17/1828213/nasa-livestreams-the-rocket-that-will-carry-four-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Livestreams the Rocket That Will Carry Four Astronauts Around the Moon](https://science.slashdot.org/story/26/01/17/1828213/nasa-livestreams-the-rocket-that-will-carry-four-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 18:29:00](https://news.ycombinator.com/item?id=46660543) - [Raising money fucked me up](https://blog.yakkomajuri.com/blog/raising-money-fucked-me-up)
* [2026-01-17, 17:34:00](https://yro.slashdot.org/story/26/01/17/0718211/what-happened-after-security-researchers-found-60-flock-cameras-livestreaming-to-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happened After Security Researchers Found 60 Flock Cameras Livestreaming to the Internet](https://yro.slashdot.org/story/26/01/17/0718211/what-happened-after-security-researchers-found-60-flock-cameras-livestreaming-to-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 16:39:53](https://lobste.rs/s/0mvdau/my_new_minimal_static_site_generator) - [My new minimal static site generator](https://maurycyz.com/misc/new_ssg/)
* [2026-01-17, 16:34:00](https://linux.slashdot.org/story/26/01/17/0610216/t2linux-brings-a-flagship-kde-plasma-linux-desktop-to-risc-v-and-arm64?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T2/Linux Brings a Flagship KDE Plasma Linux Desktop to RISC-V and ARM64](https://linux.slashdot.org/story/26/01/17/0610216/t2linux-brings-a-flagship-kde-plasma-linux-desktop-to-risc-v-and-arm64?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 15:34:00](https://tech.slashdot.org/story/26/01/17/0228239/as-us-officials-showed-off-a-self-driving-robo-bus---it-got-hit-by-a-tesla-driver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As US Officials Showed Off a Self-Driving Robo-Bus - It Got Hit By a Tesla Driver](https://tech.slashdot.org/story/26/01/17/0228239/as-us-officials-showed-off-a-self-driving-robo-bus---it-got-hit-by-a-tesla-driver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 15:32:12](https://lobste.rs/s/87hezy/i_hotreload_rust_so_can_you) - [I hotreload Rust and so can you](https://kampffrosch94.github.io/posts/hotreloading_rust/)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 14:34:17](https://lobste.rs/s/vp39cr/ascii_characters_are_not_pixels_deep_dive) - [ASCII characters are not pixels: a deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering)
* [2026-01-17, 13:32:55](https://lobste.rs/s/c4q8d8/fun_things_do_with_your_vm_370_machine) - [Fun things to do with your VM/370 machine](https://rbanffy.github.io/fun-with-old-mainframes.github.io/fun-with-vm370.html)
* [2026-01-17, 13:00:00](https://tech.slashdot.org/story/26/01/17/0440228/nearly-5-million-accounts-removed-under-australias-new-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly 5 Million Accounts Removed Under Australia&apos;s New Social Media Ban](https://tech.slashdot.org/story/26/01/17/0440228/nearly-5-million-accounts-removed-under-australias-new-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 12:48:13](https://lobste.rs/s/kbkcbe/website_end_all_websites) - [A Website To End All Websites](https://henry.codes/writing/a-website-to-destroy-all-websites/)
* [2026-01-17, 11:15:26](https://news.ycombinator.com/item?id=46657122) - [ASCII characters are not pixels: a deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 07:23:41](https://lobste.rs/s/s55ewk/kip_programming_language_based_on) - [kip: A programming language based on grammatical cases of Turkish](https://github.com/joom/kip)
* [2026-01-17, 06:15:02](https://lobste.rs/s/n8qgs8/emoji_design_convergence_review_2018) - [Emoji Design Convergence Review: 2018 - 2026](https://blog.emojipedia.org/emoji-design-convergence-review-2018-2026/)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
* [2026-01-16, 21:47:22](https://lobste.rs/s/0ashr1/i_set_all_376_vim_options_i_m_still_fool) - [I set all 376 Vim options and I&apos;m still a fool](https://evanhahn.com/i-set-all-376-vim-options-and-im-still-a-fool/)
* [2026-01-16, 20:00:00](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss) - [Meta to Cut More than 1,000 Jobs as its Shifts Focus to AI Wearables](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss)
* [2026-01-16, 15:23:00](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss) - [You Need A Kitchen Slide Rule](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss)
* [2026-01-16, 10:30:00](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss) - [Over Half a Million Windows Users are Switching to Linux](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
* [2026-01-15, 20:17:00](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss) - [GNOME Dev Gives Fans of Linux&apos;s Middle-Click Paste the Middle Finger](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss)
* [2026-01-15, 15:31:00](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss) - [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss)
* [2026-01-15, 14:19:14](https://news.ycombinator.com/item?id=46632885) - [Poking holes into bytecode with peephole optimisations](https://xnacly.me/posts/2026/purple-garden-first-optimisations/)
* [2026-01-15, 10:50:00](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss) - [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss)
* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
* [2026-01-14, 20:33:00](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss) - [Tech Bloggers Switching From Windows to Linux](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss)
* [2026-01-14, 15:49:00](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss) - [China Expected to Approve H200 Imports in Early 2026, Report Claims](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss)
* [2026-01-14, 13:52:32](https://news.ycombinator.com/item?id=46616077) - [The grab list: how museums decide what to save in a disaster](https://www.economist.com/1843/2025/11/21/the-grab-list-how-museums-decide-what-to-save-in-a-disaster)
* [2026-01-14, 11:06:00](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss) - [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)
* [2026-01-14, 10:43:31](https://news.ycombinator.com/item?id=46614487) - [More sustainable epoxy thanks to phosphorus](https://www.empa.ch/web/s604/flamm-hemmendes-epoxidharz-nachhaltiger-machen)
* [2026-01-14, 06:24:00](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss) - [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
