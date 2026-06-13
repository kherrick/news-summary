# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning Developments

* [repo-slopscore: Detecting AI/LLM contributions in git repositories via commit history analysis](https://slopscan.ava.pet/)

* [Researchers Put AI Chatbots in Charge of a Simulated World. This One Destroyed Everything in Just 4](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss)

* [Open source AI must win](https://opensourceaimustwin.com)

* [AI OSS tool repo goes archived overnight after raising $7.3M Seed](https://github.com/tensorzero/tensorzero)

* [AI Agent Bankrupted Their Operator While Trying to Scan DN42](https://lantian.pub/en/article/fun/ai-agent-bankrupted-their-operator-scan-dn42lantian.lantian/)

## Space and Aviation Advances

* [World's First Crewed Solid-State Flight Electrifies Aviation's Future](https://hardware.slashdot.org/story/26/06/13/0654225/worlds-first-crewed-solid-state-flight-electrifies-aviations-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NASA's Nancy Grace Roman Space Telescope is Set to Launch on August 30](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss)

* [Russia's New 'Starlink-Style' Rassvet Fleet Launches](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss)

## Tech Innovations and Discoveries

* [A low-carbon computing platform from your retired phones](https://research.google/blog/a-low-carbon-computing-platform-from-your-retired-phones/)

* [How I made a 60fps Eink monitor, the Modos Flow](https://youtu.be/nHbA2-_qzH4)

* [The state of building user interfaces in Rust](https://areweguiyet.com/#ecosystem)

* [Every Frame Perfect](https://tonsky.me/blog/every-frame-perfect/)

## Privacy and Security Updates

* [US Congress Lets 'Warrantless Wiretap' Law FISA Lapse](https://news.slashdot.org/story/26/06/13/066258/us-congress-lets-warrantless-wiretap-law-fisa-lapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Arch Linux Now Believes Malware Incident Under Control: More Than 1,500 Packages](https://www.phoronix.com/news/Arch-Linux-AUR-More-Than-1500)

* [21 Zero-Days in FFmpeg](https://depthfirst.com/research/21-zero-days-in-ffmpeg)

* [Code Reveals Meta Smart Glasses Can Use 'Faceprint' Tracking, Raising Privacy Alarms](https://soylentnews.org/article.pl?sid=26/06/07/2330212&amp;from=rss)

* [How A USB-Connected Speaker Can Infect A PC Without Ever Being Touched](https://soylentnews.org/article.pl?sid=26/06/07/2319243&amp;from=rss)

## Corporate and Legal Developments

* [Sam Bankman-Fried loses bid to appeal against fraud conviction in FTX case](https://www.theguardian.com/business/2026/jun/12/sam-bankman-fried-loses-appeal)

* [ShinyHunters Hacked 100+ Organizations By Exploiting an Oracle PeopleSoft 0-Day](https://developers.slashdot.org/story/26/06/12/2117221/shinyhunters-hacked-100-organizations-by-exploiting-an-oracle-peoplesoft-0-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Justice Department Approves Paramount's $111 Billion Acquisition of Warner Bros.](https://slashdot.org/story/26/06/12/2124201/justice-department-approves-paramounts-111-billion-acquisition-of-warner-bros?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [US bans differential privacy in Census data](https://desfontain.es/blog/banning-noise.html)

## Health and Scientific Advancements

* [CRISPR tech selectively shreds cancer cells, including 'undruggable' cancers](https://innovativegenomics.org/news/crispr-technique-selectively-shreds-cancer-cells/)

* [Treating pancreatic tumours may have revealed cancer's master switch](https://economist.com/science-and-technology/2026/06/12/treating-pancreatic-tumours-may-have-revealed-cancers-master-switch)

## Miscellaneous

* [62 Year Old Dutch Man Marries The Chatbot Of His Dreams](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss)

* [Mystery Orb Videos, Other UFO Records Released By White House](https://entertainment.slashdot.org/story/26/06/12/2249251/mystery-orb-videos-other-ufo-records-released-by-white-house?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Rejected Emoji Proposals](https://charlottebuff.com/unicode/misc/rejected-emoji-proposals/)

* [Cities Can't Figure Out How to Turn Off Flock Cameras, So They're Using Trash Bags](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss)

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

* [2026-06-13, 15:37:16](https://lobste.rs/s/7s8fwa/repo_slopscore_detecting_ai_llm) - [repo-slopscore: Detecting AI/LLM contributions in git repositories via commit history analysis](https://slopscan.ava.pet/)
* [2026-06-13, 15:34:00](https://news.slashdot.org/story/26/06/13/066258/us-congress-lets-warrantless-wiretap-law-fisa-lapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Congress Lets &apos;Warrantless Wiretap&apos; Law FISA Lapse](https://news.slashdot.org/story/26/06/13/066258/us-congress-lets-warrantless-wiretap-law-fisa-lapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-13, 15:31:46](https://lobste.rs/s/4rcwmh/talk_more_your_coding_agents) - [Talk more to your coding agents](https://www.datawill.io/posts/2026-06-my-agent-workflow/)
* [2026-06-13, 15:24:13](https://lobste.rs/s/jcpzqt/banning_noise_will_be_disaster_for) - [Banning noise will be a disaster for statistical data products](https://desfontain.es/blog/banning-noise.html)
* [2026-06-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss) - [Researchers Put AI Chatbots in Charge of a Simulated World. This One Destroyed Everything in Just 4 ](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss)
* [2026-06-13, 15:07:09](https://lobste.rs/s/bt7rtp/every_frame_perfect) - [Every Frame Perfect](https://tonsky.me/blog/every-frame-perfect/)
* [2026-06-13, 14:03:00](https://entertainment.slashdot.org/story/26/06/12/2249251/mystery-orb-videos-other-ufo-records-released-by-white-house?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mystery Orb Videos, Other UFO Records Released By White House](https://entertainment.slashdot.org/story/26/06/12/2249251/mystery-orb-videos-other-ufo-records-released-by-white-house?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-13, 13:58:46](https://news.ycombinator.com/item?id=48517412) - [Orthodox C++](https://bkaradzic.github.io/posts/orthodoxc++/)
* [2026-06-13, 13:54:56](https://news.ycombinator.com/item?id=48517377) - [US bans differential privacy in Census data](https://desfontain.es/blog/banning-noise.html)
* [2026-06-13, 13:34:00](https://news.ycombinator.com/item?id=48517199) - [Treating pancreatic tumours may have revealed cancer&apos;s master switch](https://economist.com/science-and-technology/2026/06/12/treating-pancreatic-tumours-may-have-revealed-cancers-master-switch)
* [2026-06-13, 13:11:25](https://lobste.rs/s/jjhe1c/scuba_diving_into_data_at_facebook) - [Scuba: Diving into Data at Facebook](https://vldb.org/pvldb/vol6/p1057-wiener.pdf)
* [2026-06-13, 12:40:16](https://news.ycombinator.com/item?id=48516710) - [Introduction to the experience of rendering Arabic typography&amp;its technical debt](https://lr0.org/blog/p/arabic/)
* [2026-06-13, 12:20:05](https://news.ycombinator.com/item?id=48516573) - [An Interview with Intel&apos;s Kira Boyko: Xeon 6&apos;s Product Director](https://chipsandcheese.com/p/an-interview-with-intels-kira-boyko)
* [2026-06-13, 12:17:27](https://news.ycombinator.com/item?id=48516558) - [Sam Bankman-Fried loses bid to appeal against fraud conviction in FTX case](https://www.theguardian.com/business/2026/jun/12/sam-bankman-fried-loses-appeal)
* [2026-06-13, 12:11:35](https://news.ycombinator.com/item?id=48516510) - [Show HN: 2 Weeks of Hallucinate – The Photo Gallery](https://hallucinate.site/gallery)
* [2026-06-13, 12:10:47](https://news.ycombinator.com/item?id=48516504) - [AI OSS tool repo goes archived over night after raising $7.3M Seed](https://github.com/tensorzero/tensorzero)
* [2026-06-13, 11:55:30](https://news.ycombinator.com/item?id=48516379) - [Arch Linux Now Believes Malware Incident Under Control: More Than 1,500 Packages](https://www.phoronix.com/news/Arch-Linux-AUR-More-Than-1500)
* [2026-06-13, 11:40:20](https://news.ycombinator.com/item?id=48516251) - [Every Frame Perfect](https://tonsky.me/blog/every-frame-perfect/)
* [2026-06-13, 11:00:00](https://hardware.slashdot.org/story/26/06/13/0654225/worlds-first-crewed-solid-state-flight-electrifies-aviations-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s First Crewed Solid-State Flight Electrifies Aviation&apos;s Future](https://hardware.slashdot.org/story/26/06/13/0654225/worlds-first-crewed-solid-state-flight-electrifies-aviations-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-13, 10:25:00](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss) - [Officials Powerless to Stop 8 New Data Centers That Could Transform Small Texas County](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss)
* [2026-06-13, 10:24:09](https://lobste.rs/s/sqh2uq/opensource_ai_must_win) - [Opensource AI Must Win](https://opensourceaimustwin.com)
* [2026-06-13, 09:55:32](https://news.ycombinator.com/item?id=48515454) - [RTX 5080 and RTX 3090 Setup: 80 Tok/s on Qwen 3.6 27B Q8](https://imil.net/blog/posts/2026/rtx-5080-+-rtx-3090-setup-80+-tok-s-on-qwen-3.6-27b-q8/)
* [2026-06-13, 09:44:25](https://news.ycombinator.com/item?id=48515385) - [Show HN: Paca – Lightweight Jira alternative for human-AI collaboration](https://github.com/Paca-AI/paca)
* [2026-06-13, 09:38:32](https://news.ycombinator.com/item?id=48515336) - [A low-carbon computing platform from your retired phones](https://research.google/blog/a-low-carbon-computing-platform-from-your-retired-phones/)
* [2026-06-13, 07:29:23](https://lobste.rs/s/m3i81d/using_notes_glasgow_haskell_compiler) - [Using Notes in the Glasgow Haskell Compiler](https://gitlab.haskell.org/ghc/ghc/-/wikis/commentary/coding-style#2-using-notes)
* [2026-06-13, 07:00:00](https://news.slashdot.org/story/26/06/13/0546258/anthropic-suspends-all-mythos-and-fable-access-after-us-order-limiting-foreign-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic &apos;Suspends&apos; All Mythos and Fable Access After US Order Limiting Foreign Access](https://news.slashdot.org/story/26/06/13/0546258/anthropic-suspends-all-mythos-and-fable-access-after-us-order-limiting-foreign-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-13, 05:57:14](https://news.ycombinator.com/item?id=48513806) - [Leaving Mozilla](https://blog.unitedheroes.net/5751)
* [2026-06-13, 05:44:46](https://news.ycombinator.com/item?id=48513728) - [Shepherd&apos;s Dog: A Game by the Most Dangerous AI Model](https://koenvangilst.nl/lab/claude-fable-shepherds-dog)
* [2026-06-13, 05:39:00](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss) - [Cities Can&apos;t Figure Out How to Turn Off Flock Cameras, So They&apos;re Using Trash Bags](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss)
* [2026-06-13, 05:16:41](https://news.ycombinator.com/item?id=48513536) - [There is a shadow hanging over this Fable thing](https://12gramsofcarbon.com/p/tech-things-there-is-a-massive-shadow)
* [2026-06-13, 03:33:10](https://lobste.rs/s/nbaa0n/statement_on_us_government_directive) - [Statement on the US government directive to suspend access to Fable 5 and Mythos 5](https://www.anthropic.com/news/fable-mythos-access)
* [2026-06-13, 03:30:00](https://news.slashdot.org/story/26/06/12/2242249/data-center-opponents-have-blocked-or-delayed-projects-worth-nearly-130-billion-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Data Center Opponents Have Blocked Or Delayed Projects Worth Nearly $130 Billion In 2026](https://news.slashdot.org/story/26/06/12/2242249/data-center-opponents-have-blocked-or-delayed-projects-worth-nearly-130-billion-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-13, 02:17:54](https://lobste.rs/s/n3c04h/generic_dynamic_array_c_stores_no) - [A generic dynamic array in C that stores no capacity and needs no struct](https://gist.github.com/alurm/2ca14be134d719fe7431217a6b18d91e)
* [2026-06-13, 02:17:01](https://lobste.rs/s/tigq8d/rejected_emoji_proposals) - [Rejected Emoji Proposals](https://charlottebuff.com/unicode/misc/rejected-emoji-proposals/)
* [2026-06-13, 02:14:24](https://news.ycombinator.com/item?id=48511908) - [Open source AI must win](https://opensourceaimustwin.com/?share=v2)
* [2026-06-13, 00:56:00](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss) - [Yoti Flagged a Playstation User to Authorities for Running GrapheneOS on Their Phone](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss)
* [2026-06-13, 00:51:30](https://news.ycombinator.com/item?id=48511072) - [Statement on US government directive to suspend access to Fable 5 and Mythos 5](https://www.anthropic.com/news/fable-mythos-access)
* [2026-06-13, 00:49:19](https://lobste.rs/s/yskrgb/tools_for_running_vms_on_apple_silicon) - [Tools for running VMs on apple silicon macs](https://eclecticlight.co/virtualisation-on-apple-silicon/)
* [2026-06-13, 00:21:57](https://lobste.rs/s/ejra5c/21_zero_days_ffmpeg) - [21 Zero-Days in FFmpeg](https://depthfirst.com/research/21-zero-days-in-ffmpeg)
* [2026-06-12, 23:00:00](https://slashdot.org/story/26/06/12/2233242/jeff-bezos-ai-startup-aims-to-build-an-artificial-general-engineer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jeff Bezos&apos; AI Startup Aims To Build an &apos;Artificial General Engineer&apos;](https://slashdot.org/story/26/06/12/2233242/jeff-bezos-ai-startup-aims-to-build-an-artificial-general-engineer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 22:56:06](https://news.ycombinator.com/item?id=48510341) - [Show HN: Putt.day a daily mini golf game](https://putt.day/)
* [2026-06-12, 22:24:37](https://lobste.rs/s/q0xeyu/aplr_1_algorithm_for_generating_compact) - [The APLR(1) Algorithm for Generating Compact LR(1) Parsers is Simpler and More Capable than IELR(1)](https://branchtaken.com/reports/aplr1/aplr1)
* [2026-06-12, 22:13:29](https://news.ycombinator.com/item?id=48510046) - [Twenty One Zero-Days in FFmpeg](https://depthfirst.com/research/21-zero-days-in-ffmpeg)
* [2026-06-12, 22:08:03](https://news.ycombinator.com/item?id=48510010) - [Electric motors with no rare earths](https://www.renaultgroup.com/en/magazine/energy-and-powertrains/all-about-electric-motors-with-no-rare-earths/)
* [2026-06-12, 22:00:00](https://slashdot.org/story/26/06/12/2124201/justice-department-approves-paramounts-111-billion-acquisition-of-warner-bros?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Justice Department Approves Paramount&apos;s $111 Billion Acquisition of Warner Bros.](https://slashdot.org/story/26/06/12/2124201/justice-department-approves-paramounts-111-billion-acquisition-of-warner-bros?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 21:39:49](https://lobste.rs/s/9a3nvt/why_i_wrote_game_boy_advance_game_zig_2024) - [Why I Wrote a Game Boy Advance Game in Zig (2024)](https://jonot.me/posts/zig-gba/)
* [2026-06-12, 21:24:17](https://lobste.rs/s/o8i26c/swift_at_apple_migrating_truetype) - [Swift at Apple: Migrating the TrueType Hinting Interpreter](https://swift.org/blog/migrating-truetype-hinting-to-swift/)
* [2026-06-12, 21:20:00](https://developers.slashdot.org/story/26/06/12/2117221/shinyhunters-hacked-100-organizations-by-exploiting-an-oracle-peoplesoft-0-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ShinyHunters Hacked 100+ Organizations By Exploiting an Oracle PeopleSoft 0-Day](https://developers.slashdot.org/story/26/06/12/2117221/shinyhunters-hacked-100-organizations-by-exploiting-an-oracle-peoplesoft-0-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 20:57:33](https://lobste.rs/s/2yakby/catjam_2026) - [Catjam 2026](https://itch.io/jam/catjam-2026)
* [2026-06-12, 20:12:00](https://soylentnews.org/article.pl?sid=26/06/12/1133204&amp;from=rss) - [Finland Deploys New System to Detect Threats to Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/12/1133204&amp;from=rss)
* [2026-06-12, 20:08:44](https://lobste.rs/s/1yjftk/if_you_are_asking_for_human_attention) - [If you are asking for human attention, demonstrate human effort](https://tombedor.dev/human-attention-and-human-effort/)
* [2026-06-12, 20:00:00](https://yro.slashdot.org/story/26/06/12/186250/google-sues-chinese-cybercrime-operation-that-used-gemini-ai-to-send-scam-texts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Sues Chinese Cybercrime Operation That Used Gemini AI To Send Scam Texts](https://yro.slashdot.org/story/26/06/12/186250/google-sues-chinese-cybercrime-operation-that-used-gemini-ai-to-send-scam-texts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 19:54:27](https://news.ycombinator.com/item?id=48508726) - [Swift at Apple: Migrating the TrueType hinting interpreter](https://www.swift.org/blog/migrating-truetype-hinting-to-swift/)
* [2026-06-12, 19:00:00](https://hardware.slashdot.org/story/26/06/12/180236/touchscreen-macbook-100-confirmed-says-reputable-leaker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Touchscreen Macbook &apos;100% Confirmed,&apos; Says Reputable Leaker](https://hardware.slashdot.org/story/26/06/12/180236/touchscreen-macbook-100-confirmed-says-reputable-leaker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 18:00:00](https://it.slashdot.org/story/26/06/12/1755225/microsoft-surface-flaw-allowed-unprotected-devices-to-be-bricked-by-a-single-packet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Surface Flaw Allowed Unprotected Devices To Be Bricked By a Single Packet](https://it.slashdot.org/story/26/06/12/1755225/microsoft-surface-flaw-allowed-unprotected-devices-to-be-bricked-by-a-single-packet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 17:43:25](https://lobste.rs/s/kosw9h/wasi_0_3_launched) - [WASI 0.3 Launched](https://bytecodealliance.org/articles/WASI-0.3)
* [2026-06-12, 17:34:55](https://news.ycombinator.com/item?id=48507020) - [How to setup a local coding agent on macOS](https://ikyle.me/blog/2026/how-to-setup-a-local-coding-agent-on-macos)
* [2026-06-12, 17:06:44](https://lobste.rs/s/8mcck8/columnar_database_for_analytics_pure) - [A columnar database for analytics in pure Clojure](https://github.com/yogthos/flatiron)
* [2026-06-12, 17:04:19](https://lobste.rs/s/bsavh7/turn_your_site_into_place_people_can_bump) - [Turn your site into a place people can bump into each other](https://cauenapier.com/blog/townsquare_release/)
* [2026-06-12, 17:00:00](https://yro.slashdot.org/story/26/06/12/1741212/sam-bankman-fried-loses-bid-to-overturn-crypto-fraud-conviction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Bankman-Fried Loses Bid To Overturn Crypto Fraud Conviction](https://yro.slashdot.org/story/26/06/12/1741212/sam-bankman-fried-loses-bid-to-overturn-crypto-fraud-conviction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 16:00:00](https://slashdot.org/story/26/06/12/0627201/infineon-to-open-german-chip-fab-as-part-of-eu-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Infineon to Open German Chip Fab as Part of EU Sovereignty Push](https://slashdot.org/story/26/06/12/0627201/infineon-to-open-german-chip-fab-as-part-of-eu-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 15:29:00](https://soylentnews.org/article.pl?sid=26/06/11/0213228&amp;from=rss) - [Google Liable for AI Overview Falsehoods](https://soylentnews.org/article.pl?sid=26/06/11/0213228&amp;from=rss)
* [2026-06-12, 15:15:24](https://news.ycombinator.com/item?id=48505231) - [CRISPR tech selectively shreds cancer cells, including \&quot;undruggable\&quot; cancers](https://innovativegenomics.org/news/crispr-technique-selectively-shreds-cancer-cells/)
* [2026-06-12, 15:00:00](https://news.slashdot.org/story/26/06/12/0612250/spacex-ipo-makes-elon-musk-worlds-first-trillionaire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX IPO Makes Elon Musk World&apos;s First Trillionaire](https://news.slashdot.org/story/26/06/12/0612250/spacex-ipo-makes-elon-musk-worlds-first-trillionaire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 14:20:34](https://lobste.rs/s/fybei2/nix_flakes_their_guix_equivalents) - [Nix Flakes and their Guix Equivalents](https://coopi.neocities.org/posts/nix-flakes-vs-guix#guix-purity-by-design_6eece251b1ca)
* [2026-06-12, 13:04:47](https://lobste.rs/s/qnv1dy/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/qnv1dy/what_are_you_doing_this_weekend)
* [2026-06-12, 11:00:00](https://tech.slashdot.org/story/26/06/12/0558244/pokemon-go-data-was-used-to-help-train-ai-systems-being-developed-for-military-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pokemon Go Data Was Used To Help Train AI Systems Being Developed For Military Drones](https://tech.slashdot.org/story/26/06/12/0558244/pokemon-go-data-was-used-to-help-train-ai-systems-being-developed-for-military-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 10:43:00](https://soylentnews.org/article.pl?sid=26/06/11/022206&amp;from=rss) - [You Can Now Get a Religious Exemption From Using AI at Work](https://soylentnews.org/article.pl?sid=26/06/11/022206&amp;from=rss)
* [2026-06-12, 05:59:29](https://lobste.rs/s/ishgbs/ai_agent_bankrupted_their_operator_while) - [AI Agent Bankrupted Their Operator While Trying to Scan DN42](https://lantian.pub/en/article/fun/ai-agent-bankrupted-their-operator-scan-dn42lantian.lantian/)
* [2026-06-12, 05:51:00](https://soylentnews.org/article.pl?sid=26/06/11/027248&amp;from=rss) - [Lexar Regional Manager Says That RAM Prices Are Expected To Double By The End Of The Year ](https://soylentnews.org/article.pl?sid=26/06/11/027248&amp;from=rss)
* [2026-06-12, 05:39:08](https://lobste.rs/s/wnn1ul/how_i_made_60fps_eink_monitor_modos_flow) - [How I made a 60fps Eink monitor, the Modos Flow](https://youtu.be/nHbA2-_qzH4)
* [2026-06-12, 01:18:00](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss) - [62 Year Old Dutch Man Marries The Chatbot Of His Dreams](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss)
* [2026-06-11, 20:28:00](https://soylentnews.org/article.pl?sid=26/06/10/186244&amp;from=rss) - [DUPE: World’s First Wind-powered Underwater Datacentre Starts Operating in China](https://soylentnews.org/article.pl?sid=26/06/10/186244&amp;from=rss)
* [2026-06-11, 20:24:18](https://news.ycombinator.com/item?id=48495928) - [Malware developers added nuclear and biological weapons text to to their spyware](https://twitter.com/jsrailton/status/2064661778978533571)
* [2026-06-11, 19:36:02](https://lobste.rs/s/ta0sem/hundreds_aur_packages_attacked_by) - [Hundreds of AUR packages attacked by infostealer](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/FGXPCB3ZVCJIV7FX323SBAX2JHYB7ZS4/)
* [2026-06-11, 15:43:00](https://soylentnews.org/article.pl?sid=26/06/10/183253&amp;from=rss) - [Donut Labs Much Reported &apos;Solid-State Sodium Ion Battery&apos; Appears to be Lithium Ion, After All](https://soylentnews.org/article.pl?sid=26/06/10/183253&amp;from=rss)
* [2026-06-11, 10:58:00](https://soylentnews.org/article.pl?sid=26/06/10/1134227&amp;from=rss) - [Google Signs $920M Monthly Compute Deal With SpaceX ](https://soylentnews.org/article.pl?sid=26/06/10/1134227&amp;from=rss)
* [2026-06-11, 06:13:00](https://soylentnews.org/article.pl?sid=26/06/10/1126222&amp;from=rss) - [Canonical Sends Ubuntu Into the AI Agent Era](https://soylentnews.org/article.pl?sid=26/06/10/1126222&amp;from=rss)
* [2026-06-11, 01:30:00](https://soylentnews.org/article.pl?sid=26/06/10/1111258&amp;from=rss) - [S&amp;P 500 Rejects SpaceX, Also Blocking Entry for OpenAI and Anthropic](https://soylentnews.org/article.pl?sid=26/06/10/1111258&amp;from=rss)
* [2026-06-11, 00:00:42](https://news.ycombinator.com/item?id=48484496) - [H.R. 6028 would fundamentally change the U.S. Copyright Office](https://www.eff.org/deeplinks/2026/06/congress-just-rushed-through-disastrous-copyright-office-overhaul)
* [2026-06-10, 20:44:00](https://soylentnews.org/article.pl?sid=26/06/10/116251&amp;from=rss) - [Cyberdecks Are Having a Moment, Rejecting Big Tech Surveillance With Style and Substance](https://soylentnews.org/article.pl?sid=26/06/10/116251&amp;from=rss)
* [2026-06-10, 19:28:49](https://news.ycombinator.com/item?id=48481400) - [Show HN: I am building a map of people who lived in the Roman Empire](https://new.roman-names.com/)
* [2026-06-10, 16:44:23](https://news.ycombinator.com/item?id=48479008) - [The state of building user interfaces in Rust](https://areweguiyet.com/#ecosystem)
* [2026-06-10, 16:01:00](https://soylentnews.org/article.pl?sid=26/06/10/0054230&amp;from=rss) - [UC Faculty Demand a Return to SAT Tests for STEM Applicants](https://soylentnews.org/article.pl?sid=26/06/10/0054230&amp;from=rss)
* [2026-06-10, 11:25:00](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss) - [Russia&apos;s New ‘Starlink‑Style’ Rassvet Fleet Launches](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss)
* [2026-06-10, 06:35:00](https://soylentnews.org/article.pl?sid=26/06/08/123201&amp;from=rss) - [&apos;Please Do Not Vibe F--- Up This Software&apos;: Broken Backups Spark AI Coding Row in Rsync Project](https://soylentnews.org/article.pl?sid=26/06/08/123201&amp;from=rss)
* [2026-06-10, 01:53:00](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss) - [NASA&apos;s Nancy Grace Roman Space Telescope is Set to Launch on August 30](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss)
* [2026-06-10, 01:33:43](https://news.ycombinator.com/item?id=48470152) - [The computer science degree isn’t dead](https://spectrum.ieee.org/computer-science-degree-isnt-dead)
* [2026-06-09, 21:07:00](https://soylentnews.org/article.pl?sid=26/06/08/1131238&amp;from=rss) - [Raspberry Pi&apos;s Profits Are Up. So is its DRAM Bill](https://soylentnews.org/article.pl?sid=26/06/08/1131238&amp;from=rss)
* [2026-06-09, 20:41:44](https://news.ycombinator.com/item?id=48467437) - [Appreciating Exif](https://brentfitzgerald.com/posts/appreciating-exif/)
* [2026-06-09, 16:20:00](https://soylentnews.org/article.pl?sid=26/06/07/2331246&amp;from=rss) - [Canada&apos;s Next-Gen AWACS/Surveillance Planes Won&apos;t Be Coming From The USA](https://soylentnews.org/article.pl?sid=26/06/07/2331246&amp;from=rss)
* [2026-06-09, 11:32:00](https://soylentnews.org/article.pl?sid=26/06/07/2330212&amp;from=rss) - [Code Reveals Meta Smart Glasses Can Use &apos;Faceprint&apos; Tracking, Raising Privacy Alarms](https://soylentnews.org/article.pl?sid=26/06/07/2330212&amp;from=rss)
* [2026-06-09, 06:50:00](https://soylentnews.org/article.pl?sid=26/06/07/2321211&amp;from=rss) - [Datacenters May Face One-Year Ban In NY](https://soylentnews.org/article.pl?sid=26/06/07/2321211&amp;from=rss)
* [2026-06-09, 02:06:00](https://soylentnews.org/article.pl?sid=26/06/07/2319243&amp;from=rss) - [How A USB-Connected Speaker Can Infect A PC Without Ever Being Touched](https://soylentnews.org/article.pl?sid=26/06/07/2319243&amp;from=rss)
