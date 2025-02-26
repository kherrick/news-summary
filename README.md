# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Software Engineering Job Openings Hit 5-Year Low Amid Industry Shift](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss) - Examining the evolving demand for software engineers and the potential implications for the tech industry. [Comments](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss)

* [ExpressVPN Gets Faster and More Secure, Thanks To Rust](https://developers.slashdot.org/story/25/02/26/2133246/expressvpn-gets-faster-and-more-secure-thanks-to-rust?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ExpressVPN enhances its performance and security by adopting the Rust programming language. [Comments](https://developers.slashdot.org/story/25/02/26/2133246/expressvpn-gets-faster-and-more-secure-thanks-to-rust?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Introducing the Framework Desktop](https://frame.work/hr/en/blog/introducing-the-framework-desktop) - Framework expands its modular computing product line with a customizable desktop PC model. [Comments](https://lobste.rs/s/8iwvft/introducing_framework_desktop)

## Artificial Intelligence and Data

* [ForeverVM: Run AI-generated code in stateful sandboxes that run forever](https://forevervm.com/) - A novel cloud service enables the persistent execution of AI-generated applications. [Comments](https://news.ycombinator.com/item?id=43184686)

* [Meta In Talks For $200 Billion AI Data Center Project](https://news.slashdot.org/story/25/02/26/0315237/meta-in-talks-for-200-billion-ai-data-center-project?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta plans a massive investment in AI infrastructure to maintain competitive edge. [Comments](https://news.slashdot.org/story/25/02/26/0315237/meta-in-talks-for-200-billion-ai-data-center-project?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [North Korea's Unprecedented $1.5 Billion Crypto Heist Exploited Human Element, Not Code](https://it.slashdot.org/story/25/02/26/0522234/north-koreas-unprecedented-15-billion-crypto-heist-exploited-human-element-not-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analysis of how human vulnerabilities surpassed technical exploits in this major cybercrime. [Comments](https://it.slashdot.org/story/25/02/26/0522234/north-koreas-unprecedented-15-billion-crypto-heist-exploited-human-element-not-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Space and Exploration

* [The Secretive X-37B Space Plane Snapped This Picture of Earth From Orbit](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss) - Rare visual insight into ongoing experiments with the X-37B unmanned spacecraft. [Comments](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss)

* [Put a data center on the moon?](https://spectrum.ieee.org/data-center-on-the-moon) - Exploring the feasibility and potential benefits of deploying lunar data centers. [Comments](https://news.ycombinator.com/item?id=43187759)

## Cultural and Historical Insights

* [Photographs of the Old West](https://cosmographia.substack.com/p/photographs-of-the-old-west) - Rare imagery capturing life and traditions of the historical Old West. [Comments](https://news.ycombinator.com/item?id=43186301)

* [Skopje’s eccentric post office (2021)](https://www.new-east-archive.org/articles/show/12963/concrete-ideas-skopje-central-post-office-modernist-brutalism-demolition-architecture-north-macedonia) - The story of a modernist architectural gem facing uncertainties in North Macedonia. [Comments](https://news.ycombinator.com/item?id=43186433)

## Cybersecurity and Privacy

* [US Intelligence Chief Opposes UK Order for Apple Encryption Backdoor](https://news.slashdot.org/story/25/02/26/187252/us-intelligence-chief-opposes-uk-order-for-apple-encryption-backdoor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Debate over encryption policies escalates between tech giants and global governments. [Comments](https://news.slashdot.org/story/25/02/26/187252/us-intelligence-chief-opposes-uk-order-for-apple-encryption-backdoor?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Cellebrite Suspends Serbia as Customer After Claims Police Used Firm's Tech To Plant Spyware](https://tech.slashdot.org/story/25/02/26/1952228/cellebrite-suspends-serbia-as-customer-after-claims-police-used-firms-tech-to-plant-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Cellebrite reacts to allegations of misuse involving its forensic tools. [Comments](https://tech.slashdot.org/story/25/02/26/1952228/cellebrite-suspends-serbia-as-customer-after-claims-police-used-firms-tech-to-plant-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-02-26, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss) - [Software Engineering Job Openings Hit 5-Year Low Amid Industry Shift](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss)
* [2025-02-26, 21:40:00](https://developers.slashdot.org/story/25/02/26/2133246/expressvpn-gets-faster-and-more-secure-thanks-to-rust?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ExpressVPN Gets Faster and More Secure, Thanks To Rust](https://developers.slashdot.org/story/25/02/26/2133246/expressvpn-gets-faster-and-more-secure-thanks-to-rust?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 21:39:31](https://news.ycombinator.com/item?id=43188537) - [Tom Stevenson on the deciphering of Linear Elamite](https://www.lrb.co.uk/the-paper/v47/n04/tom-stevenson/beyond-mesopotamia)
* [2025-02-26, 21:03:13](https://lobste.rs/s/ng16gl/socrates_is_state_machine) - [Socrates is a state machine](https://www.sminez.dev/socrates-is-a-state-machine/)
* [2025-02-26, 20:52:01](https://lobste.rs/s/mzgi1d/there_s_no_such_thing_as_isomorphic_layout) - [There’s no such thing as an isomorphic layout effect](https://smoores.dev/post/no_such_thing_isomorphic_layout_effect/)
* [2025-02-26, 20:37:23](https://lobste.rs/s/nqwywo/what_is_founder_mode) - [What is \"founder mode\"?](https://tomblomfield.com/post/763715798246227968/what-is-founder-mode)
* [2025-02-26, 20:20:39](https://news.ycombinator.com/item?id=43187759) - [Put a data center on the moon?](https://spectrum.ieee.org/data-center-on-the-moon)
* [2025-02-26, 20:04:00](https://tech.slashdot.org/story/25/02/26/1952228/cellebrite-suspends-serbia-as-customer-after-claims-police-used-firms-tech-to-plant-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cellebrite Suspends Serbia as Customer After Claims Police Used Firm's Tech To Plant Spyware](https://tech.slashdot.org/story/25/02/26/1952228/cellebrite-suspends-serbia-as-customer-after-claims-police-used-firms-tech-to-plant-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 19:31:25](https://news.ycombinator.com/item?id=43187231) - [Show HN: LLM plays Pokémon (open sourced)](https://github.com/adenta/fire_red_agent)
* [2025-02-26, 19:29:37](https://news.ycombinator.com/item?id=43187209) - [Replace OCR with Vision Language Models](https://github.com/vlm-run/vlmrun-cookbook/blob/main/notebooks/01_schema_showcase.ipynb)
* [2025-02-26, 19:25:00](https://entertainment.slashdot.org/story/25/02/26/1858226/whos-watching-what-on-tv-whos-to-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Who's Watching What on TV? Who's To Say?](https://entertainment.slashdot.org/story/25/02/26/1858226/whos-watching-what-on-tv-whos-to-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 19:00:18](https://lobste.rs/s/8iwvft/introducing_framework_desktop) - [Introducing the Framework Desktop](https://frame.work/hr/en/blog/introducing-the-framework-desktop)
* [2025-02-26, 18:45:00](https://news.slashdot.org/story/25/02/26/1830248/youtube-reaches-1-billion-monthly-podcast-viewers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [YouTube Reaches 1 Billion Monthly Podcast Viewers](https://news.slashdot.org/story/25/02/26/1830248/youtube-reaches-1-billion-monthly-podcast-viewers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 18:36:51](https://news.ycombinator.com/item?id=43186614) - [Securing tomorrow's software: the need for memory safety standards](https://security.googleblog.com/2025/02/securing-tomorrows-software-need-for.html)
* [2025-02-26, 18:34:47](https://lobste.rs/s/mok6ks/securing_tomorrow_s_software_need_for) - [Securing tomorrow's software: the need for memory safety standards](https://security.googleblog.com/2025/02/securing-tomorrows-software-need-for.html)
* [2025-02-26, 18:21:11](https://news.ycombinator.com/item?id=43186433) - [Skopje’s eccentric post office (2021)](https://www.new-east-archive.org/articles/show/12963/concrete-ideas-skopje-central-post-office-modernist-brutalism-demolition-architecture-north-macedonia)
* [2025-02-26, 18:19:28](https://news.ycombinator.com/item?id=43186413) - [Cross Views](https://moultano.wordpress.com/2025/02/24/you-should-make-cross-views/)
* [2025-02-26, 18:09:39](https://news.ycombinator.com/item?id=43186301) - [Photographs of the Old West](https://cosmographia.substack.com/p/photographs-of-the-old-west)
* [2025-02-26, 18:08:00](https://news.slashdot.org/story/25/02/26/187252/us-intelligence-chief-opposes-uk-order-for-apple-encryption-backdoor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Intelligence Chief Opposes UK Order for Apple Encryption Backdoor](https://news.slashdot.org/story/25/02/26/187252/us-intelligence-chief-opposes-uk-order-for-apple-encryption-backdoor?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 17:53:45](https://lobste.rs/s/mh2wvy/hedy_creating_programming_language_for) - [Hedy: Creating a Programming Language for Everyone](https://www.youtube.com/watch?v=rHxAdIFXplI)
* [2025-02-26, 17:45:19](https://news.ycombinator.com/item?id=43186050) - [The Man Who Spent Forty-Two Years at the Beverly Hills Hotel Pool (1993)](https://www.newyorker.com/magazine/1993/02/22/beverly-hills-hotel-paradise-lost)
* [2025-02-26, 17:42:12](https://lobste.rs/s/qzv9qc/meshtastic_2_6_preview_mui_next_hop) - [Meshtastic 2.6 Preview: MUI and Next-Hop Routing are here](https://meshtastic.org/blog/meshtastic-2-6-preview/)
* [2025-02-26, 17:36:33](https://lobste.rs/s/q1d8kv/on_how_we_moved_kubernetes) - [On How We Moved to Kubernetes](https://radekmie.dev/blog/on-how-we-moved-to-kubernetes/)
* [2025-02-26, 17:24:00](https://it.slashdot.org/story/25/02/26/1724216/a-disney-worker-downloaded-an-ai-tool-it-led-to-a-hack-that-ruined-his-life?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [A Disney Worker Downloaded an AI Tool. It Led To a Hack That Ruined His Life.](https://it.slashdot.org/story/25/02/26/1724216/a-disney-worker-downloaded-an-ai-tool-it-led-to-a-hack-that-ruined-his-life?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 17:19:59](https://lobste.rs/s/ebpdwe/typescript_types_can_run_doom) - [TypeScript types can run DOOM](https://www.youtube.com/watch?v=0mCsluv5FXA)
* [2025-02-26, 17:19:29](https://news.ycombinator.com/item?id=43185769) - [DARPA Large Bio-Mechanical Space Structures](https://sam.gov/opp/49c9fac62ef249f19cda8b436a095d3b/view)
* [2025-02-26, 17:17:11](https://news.ycombinator.com/item?id=43185733) - [Rediscovering Quaternions](https://jasonfantl.com/posts/Space-of-3D-Rotations/)
* [2025-02-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss) - [Chinese Hackers Compromised Organizations in 70 Nations, Warn US Federal Agencies](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss)
* [2025-02-26, 16:50:51](https://news.ycombinator.com/item?id=43185446) - [Alexa+](https://www.aboutamazon.com/news/devices/new-alexa-generative-artificial-intelligence)
* [2025-02-26, 16:47:10](https://lobste.rs/s/yemc16/cp_copying_all_files_directory_including) - [cp -  copying all files of a directory, including hidden ones](https://bhoot.dev/2025/cp-dot-copies-everything/)
* [2025-02-26, 16:40:00](https://news.slashdot.org/story/25/02/26/1557217/bp-shuns-renewables-in-return-to-oil-and-gas?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [BP Shuns Renewables in Return To Oil and Gas](https://news.slashdot.org/story/25/02/26/1557217/bp-shuns-renewables-in-return-to-oil-and-gas?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 16:32:46](https://news.ycombinator.com/item?id=43185246) - [Launch HN: Maritime Fusion (YC W25) – Fusion Reactors for Ships](https://news.ycombinator.com/item?id=43185246)
* [2025-02-26, 16:15:17](https://news.ycombinator.com/item?id=43185059) - [Long division verified via Hoare logic](https://www.cofault.com/2025/02/long-story-of-division.html)
* [2025-02-26, 16:14:02](https://lobste.rs/s/phphnb/tiktok_alternative_rednote_xiaohongshu) - [TikTok alternative RedNote (Xiaohongshu) fails basic security measures](https://petal.blog/articles/exploiting-rednote.html)
* [2025-02-26, 16:00:00](https://slashdot.org/story/25/02/26/1552231/amazon-revamps-alexa-with-generative-ai-after-year-long-delay?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Revamps Alexa With Generative AI After Year-Long Delay](https://slashdot.org/story/25/02/26/1552231/amazon-revamps-alexa-with-generative-ai-after-year-long-delay?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 15:58:19](https://news.ycombinator.com/item?id=43184860) - [Bifurcation: The secret giant islands formed when rivers split](https://starkeycomics.com/2021/06/10/bifurcation-the-secret-giant-islands-formed-when-rivers-split/)
* [2025-02-26, 15:47:17](https://news.ycombinator.com/item?id=43184762) - [Jeff Bezos exerts more control of Washington Post opinion](https://deadline.com/2025/02/jeff-bezos-washington-post-opinion-1236302292/)
* [2025-02-26, 15:41:44](https://news.ycombinator.com/item?id=43184686) - [ForeverVM: Run AI-generated code in stateful sandboxes that run forever](https://forevervm.com/)
* [2025-02-26, 15:22:00](https://news.slashdot.org/story/25/02/26/1340222/surge-in-uk-university-students-using-ai-to-complete-work?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Surge in UK University Students Using AI To Complete Work](https://news.slashdot.org/story/25/02/26/1340222/surge-in-uk-university-students-using-ai-to-complete-work?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 15:05:02](https://news.ycombinator.com/item?id=43184291) - [TypeScript types can run DOOM [video]](https://www.youtube.com/watch?v=0mCsluv5FXA)
* [2025-02-26, 14:44:54](https://lobste.rs/s/cmnxjz/miserable_state_cellular_modems_mobile) - [The Miserable State of Cellular Modems and Mobile Network Operators](https://blog.golioth.io/the-miserable-state-of-modems-and-mobile-network-operators/)
* [2025-02-26, 14:40:00](https://entertainment.slashdot.org/story/25/02/26/1332221/indian-cinema-chain-sued-by-film-goer-over-lengthy-pre-film-ads?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Indian Cinema Chain Sued By Film-goer Over Lengthy Pre-film Ads](https://entertainment.slashdot.org/story/25/02/26/1332221/indian-cinema-chain-sued-by-film-goer-over-lengthy-pre-film-ads?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 14:34:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-26, 14:32:30](https://lobste.rs/s/xlec3d/intent_experiment_for_longer) - [Intent to Experiment for Longer](https://blog.kizu.dev/intent-to-experiment-for-longer/)
* [2025-02-26, 14:28:26](https://news.ycombinator.com/item?id=43183891) - [Show HN: A Database Written in Golang](https://github.com/Sahilb315/AtomixDB)
* [2025-02-26, 14:00:00](https://news.slashdot.org/story/25/02/26/1321235/uk-users-show-little-concern-as-apple-removes-icloud-encryption?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK Users Show Little Concern as Apple Removes iCloud Encryption](https://news.slashdot.org/story/25/02/26/1321235/uk-users-show-little-concern-as-apple-removes-icloud-encryption?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 13:00:00](https://news.slashdot.org/story/25/02/26/0315237/meta-in-talks-for-200-billion-ai-data-center-project?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta In Talks For $200 Billion AI Data Center Project](https://news.slashdot.org/story/25/02/26/0315237/meta-in-talks-for-200-billion-ai-data-center-project?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 12:42:35](https://news.ycombinator.com/item?id=43183131) - [Show HN: Breakout with a roguelite/vampire survivor twist](https://breakout.lecaro.me/)
* [2025-02-26, 12:34:00](https://lobste.rs/s/cvclkp/peek_into_possible_future_python_browser) - [A peek into a possible future of Python in the browser](https://lukasz.langa.pl/f37aa97a-9ea3-4aeb-b6a0-9daeea5a7505/)
* [2025-02-26, 12:19:35](https://lobste.rs/s/0fzg6o/programming_really_is_simple) - [Programming Really Is Simple Mathematics](https://bertrandmeyer.com/2025/02/25/new-preprint-programming-really-is-simple-mathematics/)
* [2025-02-26, 12:05:00](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss) - [Seagate's Fraudulent HDD Scandal Expands: Ironwolf Pro Hard Drives Reportedly Also Affected](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss)
* [2025-02-26, 12:00:00](https://it.slashdot.org/story/25/02/26/0522234/north-koreas-unprecedented-15-billion-crypto-heist-exploited-human-element-not-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [North Korea's Unprecedented $1.5 Billion Crypto Heist Exploited Human Element, Not Code](https://it.slashdot.org/story/25/02/26/0522234/north-koreas-unprecedented-15-billion-crypto-heist-exploited-human-element-not-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 11:55:26](https://news.ycombinator.com/item?id=43182854) - [The Miserable State of Modems and Mobile Network Operators](https://blog.golioth.io/the-miserable-state-of-modems-and-mobile-network-operators/)
* [2025-02-26, 10:00:00](https://science.slashdot.org/story/25/02/26/0312206/fruits-and-flowers-may-counteract-harmful-effects-of-microplastics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Fruits and Flowers May Counteract Harmful Effects of Microplastics](https://science.slashdot.org/story/25/02/26/0312206/fruits-and-flowers-may-counteract-harmful-effects-of-microplastics?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 09:57:23](https://news.ycombinator.com/item?id=43182325) - [The FFT Strikes Back: An Efficient Alternative to Self-Attention](https://arxiv.org/abs/2502.18394)
* [2025-02-26, 08:56:22](https://lobste.rs/s/vicy6o/i_went_sql_injection_court) - [I Went To SQL Injection Court](https://sockpuppet.org/blog/2025/02/09/fixing-illinois-foia/)
* [2025-02-26, 07:55:10](https://lobste.rs/s/5xo0w2/standard_proposal_for_memory_safety_c) - [Standard proposal for memory-Safety in C (2024)](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3211.pdf)
* [2025-02-26, 07:20:00](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss) - [The Secretive X-37B Space Plane Snapped This Picture of Earth From Orbit](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss)
* [2025-02-26, 07:00:00](https://science.slashdot.org/story/25/02/26/032251/earth-safe-from-city-killer-asteroid-2024-yr4?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Earth Safe From 'City-Killer' Asteroid 2024 YR4](https://science.slashdot.org/story/25/02/26/032251/earth-safe-from-city-killer-asteroid-2024-yr4?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 06:43:50](https://lobste.rs/s/fi97rp/useless_use_cat_award_2000) - [Useless Use of Cat Award (2000)](https://porkmail.org/era/unix/award)
* [2025-02-26, 05:42:02](https://lobste.rs/s/ersq0z/apl_since_1978) - [APL since 1978](https://dl.acm.org/doi/10.1145/3386319)
* [2025-02-26, 05:25:52](https://lobste.rs/s/fwglvt/why_ruby_on_rails_still_matters) - [Why Ruby on Rails still matters](https://www.contraption.co/rails-versus-nextjs/)
* [2025-02-26, 02:33:00](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss) - [US Treasury Beneficial Ownership Information Reporting is Back On (Again)](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss)
* [2025-02-26, 01:02:24](https://news.ycombinator.com/item?id=43179478) - [DeepGEMM: clean and efficient FP8 GEMM kernels with fine-grained scaling](https://github.com/deepseek-ai/DeepGEMM)
* [2025-02-25, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss) - [Polish Treasure Hunters Unearth Seriously Badass Two-Handed Medieval Sword](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss)
* [2025-02-25, 20:08:08](https://lobste.rs/s/oblb9x/framework_2nd_gen_event) - [Framework (2nd Gen) Event](https://www.youtube.com/watch?v=-8k7jTF_JCg)
* [2025-02-25, 18:39:10](https://news.ycombinator.com/item?id=43175628) - [I Went to SQL Injection Court](https://sockpuppet.org/blog/2025/02/09/fixing-illinois-foia/)
* [2025-02-25, 17:06:00](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss) - [21st Century C++](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss)
* [2025-02-25, 16:34:07](https://news.ycombinator.com/item?id=43174041) - [Show HN: Tach – Visualize and untangle your Python codebase](https://github.com/gauge-sh/tach)
* [2025-02-25, 14:29:58](https://lobste.rs/s/vpfqm2/gleam_coming_from_erlang) - [Gleam, coming from Erlang](https://olano.dev/blog/gleam-coming-from-erlang)
* [2025-02-25, 12:23:00](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss) - [Trump Threatens Tariffs On Any Nation That Taxes Big Tech](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss)
* [2025-02-25, 11:23:16](https://lobste.rs/s/xslm1t/zlib_rs_is_faster_than_c) - [zlib-rs is faster than C](https://trifectatech.org/blog/zlib-rs-is-faster-than-c/)
* [2025-02-25, 11:15:49](https://lobste.rs/s/hyhkxi/mixing_up_public_private_keys_openid) - [Mixing up Public and Private Keys in OpenID Connect deployments](https://blog.hboeck.de/archives/909-Mixing-up-Public-and-Private-Keys-in-OpenID-Connect-deployments.html)
* [2025-02-25, 09:57:02](https://lobste.rs/s/wrpt6v/what_would_happen_if_we_didn_t_use_tcp_udp) - [What would happen if we didn't use TCP or UDP?](https://github.com/Hawzen/hdp)
* [2025-02-25, 07:37:00](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss) - [Building a Chipmaking Fab in the US Costs Twice as Much, Takes Twice as Long as in Taiwan](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss)
* [2025-02-25, 02:51:00](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss) - [Astronomers Uncover The Topsy-Turvy Atmosphere Of A Distant Planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss)
* [2025-02-24, 22:04:00](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) - [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss)
* [2025-02-24, 17:20:00](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss) - [Bird Flu Endemic in America Cows. Found in Rats](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss)
* [2025-02-24, 14:39:28](https://news.ycombinator.com/item?id=43160079) - [Show HN: Instantly Translate Manga – TranslateManga](https://translatemanga.net/en)
* [2025-02-24, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss) - [AMD Could Block the Sale of Intel Due to a Cross-Licensing Agreement](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss)
* [2025-02-24, 08:46:14](https://news.ycombinator.com/item?id=43157185) - [AI's Biggest Flaw? The Blinking Cursor Problem](https://blog.scottlogic.com/2025/02/21/ais-biggest-flaw-the-blinking-cursor-problem.html)
* [2025-02-24, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss) - [Apple Pulls End-to-End Encryption From UK Rather Than Provide Government a Backdoor](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss)
* [2025-02-24, 03:03:00](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss)
* [2025-02-23, 23:11:13](https://news.ycombinator.com/item?id=43154138) - [Project Scripts](https://paul-samuels.com/blog/2025/02/23/project-scripts/)
* [2025-02-23, 22:14:00](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss) - [NVidia to Consume 77% of Wafers Used for AI Processors in 2025](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss)
* [2025-02-23, 17:37:00](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss) - [Trump to Introduce 25% and 'Higher' Tariff on Imported Semiconductors but the Timing is Unclear](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss)
* [2025-02-23, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss) - [Electric Truck-Maker Nikola Falls Into Bankruptcy Joining a Procession of Failed EV Startups](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss)
* [2025-02-23, 09:54:51](https://news.ycombinator.com/item?id=43148150) - [Living in your programming environment [pdf]](https://www.hpi.uni-potsdam.de/hirschfeld/publications/media/ReinLinckeRamsonMattisHirschfeld_2017_LivingInYourProgrammingEnvironmentTowardsAnEnvironmentForExploratoryAdaptationsOfProductivityTools_AcmDL.pdf)
* [2025-02-23, 08:05:00](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss) - [Humane's AI Pin is No More and Owners are Left With Nothing](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss)
* [2025-02-23, 05:10:39](https://news.ycombinator.com/item?id=43146758) - [Decompilation of Minecraft: Legacy Console Edition](https://github.com/GRAnimated/MinecraftLCE)
* [2025-02-23, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss) - [The Odds of a City-Killer Asteroid Impact in 2032 Keep Rising](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss)
* [2025-02-22, 22:40:00](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss) - [HP  Deliberately Adds 15 Minutes Wait Time for Support Calls](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss)
* [2025-02-22, 17:55:00](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss) - [Webcomic Author AndyOh of TMI-Comic Has Died](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss)
* [2025-02-22, 13:14:00](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss) - [Google's New AI Generates Hypotheses for Researchers](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss)
* [2025-02-22, 08:31:00](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss) - [Gnome 48 Goes Into Beta, Should Launch in a Month](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss)
* [2025-02-22, 03:48:00](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss) - [DRAM and NAND Prices Are Expected to Rise in the Second Half of 2025](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss)
