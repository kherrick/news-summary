# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [European Space Agency Acknowledges Another Breach as Criminals Claim 200 GB Data Haul](https://it.slashdot.org/story/26/01/01/1525235/european-space-agency-acknowledges-another-breach-as-criminals-claim-200-gb-data-haul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [ACM Is Now Open Access](https://www.acm.org/articles/bulletins/2026/january/acm-open-access)

* [You Can't Trust Your Eyes To Tell You What's Real Anymore, Says Instagram Head](https://tech.slashdot.org/story/26/01/01/1355226/you-cant-trust-your-eyes-to-tell-you-whats-real-anymore-says-instagram-head?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Meta made scam ads harder to find instead of removing them](https://sherwood.news/tech/rather-than-fully-cracking-down-on-scam-ads-meta-worked-to-make-them-harder/)

* [UK Company Sends Factory With 1,000C Furnace Into Space](https://news.slashdot.org/story/25/12/31/2224224/uk-company-sends-factory-with-1000c-furnace-into-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Science and Environment

* [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)

* [The Man Taking Over the Large Hadron Collider](https://science.slashdot.org/story/26/01/01/1455227/the-man-taking-over-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [World's largest electric ship launched by Tasmanian boatbuilder](https://www.theguardian.com/australia-news/2025/may/02/hull-096-worlds-largest-electric-ship-battery-power-launched)

## Cybersecurity

* [Bluetooth Headphone Jacking: A Key to Your Phone [video]](https://media.ccc.de/v/39c3-bluetooth-headphone-jacking-a-key-to-your-phone)

* [DarkSpectre Hackers Spread Malware To 8.8 Million Chrome, Edge, and Firefox Users](https://it.slashdot.org/story/25/12/31/2021253/darkspectre-hackers-spread-malware-to-88-million-chrome-edge-and-firefox-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [HP-UX hits end-of-life today, and I’m sad](https://www.osnews.com/story/144094/hp-ux-hits-end-of-life-today-and-im-sad/)

## Artificial Intelligence

* [Show HN: Use Claude Code to Query 600 GB Indexes over Hacker News, ArXiv, etc.](https://exopriors.com/scry)

* [2025: The Year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)

* [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)

## Cultural and Social Insights

* [Pixar's True Story](https://computerhistory.org/blog/pixars-true-story/)

* [Stewart Cheifet, Computer Chronicles Host, Dies At 87](https://hardware.slashdot.org/story/25/12/31/2149206/stewart-cheifet-computer-chronicles-host-dies-at-87?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Warren Buffett Retires As Berkshire Hathaway CEO After 55 Years](https://news.slashdot.org/story/25/12/31/226259/warren-buffett-retires-as-berkshire-hathaway-ceo-after-55-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-01-01, 16:01:00](https://it.slashdot.org/story/26/01/01/1525235/european-space-agency-acknowledges-another-breach-as-criminals-claim-200-gb-data-haul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Space Agency Acknowledges Another Breach as Criminals Claim 200 GB Data Haul](https://it.slashdot.org/story/26/01/01/1525235/european-space-agency-acknowledges-another-breach-as-criminals-claim-200-gb-data-haul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 15:54:49](https://lobste.rs/s/xciaf9/there_is_room_for_imperfect_fault) - [There is room for imperfect fault isolation](https://pithlessly.github.io/correctness)
* [2026-01-01, 15:19:26](https://news.ycombinator.com/item?id=46454763) - [ACM Is Now Open Access](https://www.acm.org/articles/bulletins/2026/january/acm-open-access)
* [2026-01-01, 15:00:00](https://science.slashdot.org/story/26/01/01/1455227/the-man-taking-over-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Man Taking Over the Large Hadron Collider](https://science.slashdot.org/story/26/01/01/1455227/the-man-taking-over-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 14:14:14](https://lobste.rs/s/kgbaoc/software_taketh_away_faster_than) - [Software taketh away faster than hardware giveth: Why C++ programmers keep growing fast despite competition, safety, and AI](https://herbsutter.com/2025/12/30/software-taketh-away-faster-than-hardware-giveth-why-c-programmers-keep-growing-fast-despite-competition-safety-and-ai/)
* [2026-01-01, 14:00:00](https://tech.slashdot.org/story/26/01/01/1355226/you-cant-trust-your-eyes-to-tell-you-whats-real-anymore-says-instagram-head?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [You Can&apos;t Trust Your Eyes To Tell You What&apos;s Real Anymore, Says Instagram Head](https://tech.slashdot.org/story/26/01/01/1355226/you-cant-trust-your-eyes-to-tell-you-whats-real-anymore-says-instagram-head?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 13:04:07](https://lobste.rs/s/mxqift/one_number_i_trust_plain_text_accounting) - [One Number I Trust: Plain-Text Accounting for a Multi-Currency Household](https://lalitm.com/post/one-number-i-trust/)
* [2026-01-01, 13:00:00](https://tech.slashdot.org/story/25/12/31/2232231/waymos-are-now-coming-for-your-coveted-san-francisco-parking-spots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymos Are Now Coming For Your Coveted San Francisco Parking Spots](https://tech.slashdot.org/story/25/12/31/2232231/waymos-are-now-coming-for-your-coveted-san-francisco-parking-spots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 12:29:01](https://news.ycombinator.com/item?id=46453582) - [Meta made scam ads harder to find instead of removing them](https://sherwood.news/tech/rather-than-fully-cracking-down-on-scam-ads-meta-worked-to-make-them-harder/)
* [2026-01-01, 11:33:31](https://lobste.rs/s/t5niao/z80_lm_is_2_bit_quantized_language_model) - [Z80-μLM is a 2-bit quantized language model small enough to run on an 8-bit Z80 processor](https://github.com/HarryR/z80ai)
* [2026-01-01, 11:17:18](https://news.ycombinator.com/item?id=46453204) - [Bluetooth Headphone Jacking: A Key to Your Phone [video]](https://media.ccc.de/v/39c3-bluetooth-headphone-jacking-a-key-to-your-phone)
* [2026-01-01, 11:01:38](https://news.ycombinator.com/item?id=46453114) - [I rebooted my social life](https://takes.jamesomalley.co.uk/p/this-might-be-oversharing)
* [2026-01-01, 10:41:28](https://lobste.rs/s/x3b4ds/making_end_end_encrypted_ai_chat_feel_like) - [Making end-to-end encrypted AI chat feel like logging in](https://confer.to/blog/2025/12/passkey-encryption/)
* [2026-01-01, 10:29:54](https://news.ycombinator.com/item?id=46452937) - [Worlds largest electric ship launched by Tasmanian boatbuilder](https://www.theguardian.com/australia-news/2025/may/02/hull-096-worlds-largest-electric-ship-battery-power-launched)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 10:00:00](https://news.slashdot.org/story/25/12/31/2224224/uk-company-sends-factory-with-1000c-furnace-into-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Company Sends Factory With 1,000C Furnace Into Space](https://news.slashdot.org/story/25/12/31/2224224/uk-company-sends-factory-with-1000c-furnace-into-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 09:37:54](https://lobste.rs/s/ki1qtn/writing_windows_95_software_2025) - [Writing Windows 95 software in 2025](https://tlxdev.hashnode.dev/writing-windows-95-software-in-2025)
* [2026-01-01, 09:14:31](https://lobste.rs/s/heusg4/hindsight_github_style_git_activity) - [hindsight: GitHub-style git activity visualizer for terminal](https://github.com/chaosprint/hindsight)
* [2026-01-01, 07:00:00](https://news.slashdot.org/story/25/12/31/2216247/nasas-largest-library-is-closing-amid-staff-and-lab-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA&apos;s Largest Library Is Closing Amid Staff and Lab Cuts](https://news.slashdot.org/story/25/12/31/2216247/nasas-largest-library-is-closing-amid-staff-and-lab-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 05:53:53](https://lobste.rs/s/ukybhb/pidgin_3_0_experimental_5_2_94_0_has_been) - [Pidgin 3.0 Experimental 5 (2.94.0) has been released](https://discourse.imfreedom.org/t/pidgin-3-0-experimental-5-2-94-0-has-been-released/338)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 04:49:09](https://lobste.rs/s/fq0fyl/statically_linking_pipewire) - [Statically Linking PipeWire](https://gamesbymason.com/blog/2025/statically-linking-pipewire/)
* [2026-01-01, 03:47:20](https://news.ycombinator.com/item?id=46451124) - [Flow5 released to open source](https://flow5.tech/docs/releasenotes.html)
* [2026-01-01, 03:41:32](https://lobste.rs/s/iasv7u/corroded_illegal_rust) - [corroded: Illegal rust](https://github.com/buyukakyuz/corroded)
* [2026-01-01, 03:30:00](https://science.slashdot.org/story/25/12/31/2014258/heart-association-revives-theory-that-light-drinking-may-be-good-for-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Heart Association Revives Theory That Light Drinking May Be Good For You](https://science.slashdot.org/story/25/12/31/2014258/heart-association-revives-theory-that-light-drinking-may-be-good-for-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 02:35:40](https://news.ycombinator.com/item?id=46450731) - [Pixar&apos;s True Story](https://computerhistory.org/blog/pixars-true-story/)
* [2026-01-01, 02:34:39](https://lobste.rs/s/kcz898/silly_diffuse_shading_model) - [A silly diffuse shading model](https://lisyarus.github.io/blog/posts/a-silly-diffuse-shading-model.html)
* [2026-01-01, 02:25:12](https://lobste.rs/s/rmenr4/how_do_you_secure_access_your_self_hosted) - [How do you secure access to your self-hosted/homelab services?](https://lobste.rs/s/rmenr4/how_do_you_secure_access_your_self_hosted)
* [2026-01-01, 01:25:44](https://lobste.rs/s/ykqi2f/2025_year_llms) - [2025: The year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)
* [2026-01-01, 01:10:00](https://news.slashdot.org/story/25/12/31/226259/warren-buffett-retires-as-berkshire-hathaway-ceo-after-55-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warren Buffett Retires As Berkshire Hathaway CEO After 55 Years](https://news.slashdot.org/story/25/12/31/226259/warren-buffett-retires-as-berkshire-hathaway-ceo-after-55-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 01:01:22](https://news.ycombinator.com/item?id=46450122) - [GoGoGrandparent (YC S16) Is Hiring Tech Leads](https://www.ycombinator.com/companies/gogograndparent/jobs/w2jGKM7-gogograndparent-yc-s16-is-hiring-tech-leads)
* [2026-01-01, 00:50:00](https://hardware.slashdot.org/story/25/12/31/2149206/stewart-cheifet-computer-chronicles-host-dies-at-87?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stewart Cheifet, Computer Chronicles Host, Dies At 87](https://hardware.slashdot.org/story/25/12/31/2149206/stewart-cheifet-computer-chronicles-host-dies-at-87?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:30:00](https://tech.slashdot.org/story/25/12/31/2238231/tech-startups-are-handing-out-free-nicotine-pouches-to-boost-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Startups Are Handing Out Free Nicotine Pouches to Boost Productivity](https://tech.slashdot.org/story/25/12/31/2238231/tech-startups-are-handing-out-free-nicotine-pouches-to-boost-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 00:18:53](https://lobste.rs/s/tenl1g/i_canceled_my_programming_book_deal) - [I canceled my programming book deal](https://austinhenley.com/blog/canceledbookdeal.html)
* [2026-01-01, 00:18:43](https://news.ycombinator.com/item?id=46449812) - [Show HN: BusterMQ, Thread-per-core NATS server in Zig with io_uring](https://bustermq.sh/)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
* [2025-12-31, 23:58:28](https://lobste.rs/s/hj01zc/hp_ux_hits_end_life_today_i_m_sad) - [HP-UX hits end-of-life today, and I’m sad](https://www.osnews.com/story/144094/hp-ux-hits-end-of-life-today-and-im-sad/)
* [2025-12-31, 23:54:46](https://news.ycombinator.com/item?id=46449643) - [2025: The Year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)
* [2025-12-31, 23:50:00](https://it.slashdot.org/story/25/12/31/2021253/darkspectre-hackers-spread-malware-to-88-million-chrome-edge-and-firefox-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DarkSpectre Hackers Spread Malware To 8.8 Million Chrome, Edge, and Firefox Users](https://it.slashdot.org/story/25/12/31/2021253/darkspectre-hackers-spread-malware-to-88-million-chrome-edge-and-firefox-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 23:10:00](https://slashdot.org/story/25/12/31/204215/openai-is-paying-employees-more-than-any-major-tech-startup-in-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Is Paying Employees More Than Any Major Tech Startup in History](https://slashdot.org/story/25/12/31/204215/openai-is-paying-employees-more-than-any-major-tech-startup-in-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 23:04:40](https://lobste.rs/s/gs5ujg/why_object_arrays_soa_pattern_beat) - [Why Object of Arrays (SoA pattern) beat interleaved arrays: a JavaScript performance rabbit hole](https://www.royalbhati.com/posts/js-array-vs-typedarray)
* [2025-12-31, 23:01:03](https://lobste.rs/s/shqikf/way_do_open_permissionless_mesh_network) - [A way to do an open and permissionless mesh network](https://fiatjaf.com/582ccd1d.html)
* [2025-12-31, 22:30:00](https://yro.slashdot.org/story/25/12/31/1959207/trump-administration-removes-three-spyware-linked-execs-from-sanctions-list?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Removes Three Spyware-Linked Execs From Sanctions List](https://yro.slashdot.org/story/25/12/31/1959207/trump-administration-removes-three-spyware-linked-execs-from-sanctions-list?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 22:25:58](https://news.ycombinator.com/item?id=46448998) - [Resistance training load does not determine hypertrophy](https://physoc.onlinelibrary.wiley.com/doi/10.1113/JP289684)
* [2025-12-31, 21:50:00](https://tech.slashdot.org/story/25/12/31/1954246/france-targets-australia-style-social-media-ban-for-children-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France Targets Australia-Style Social Media Ban For Children Next Year](https://tech.slashdot.org/story/25/12/31/1954246/france-targets-australia-style-social-media-ban-for-children-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 21:44:42](https://news.ycombinator.com/item?id=46448705) - [Warren Buffett steps down as Berkshire Hathaway CEO after six decades](https://www.latimes.com/business/story/2025-12-31/warren-buffett-steps-down-as-berkshire-hathaway-ceo-after-six-decades)
* [2025-12-31, 21:34:29](https://lobste.rs/s/foipu8/what_are_you_planning_learn_2026) - [What are you planning to learn in 2026?](https://lobste.rs/s/foipu8/what_are_you_planning_learn_2026)
* [2025-12-31, 21:15:00](https://news.slashdot.org/story/25/12/31/1834240/njs-answer-to-flooding-it-has-bought-out-and-demolished-1200-properties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NJ&apos;s Answer To Flooding: It Has Bought Out and Demolished 1,200 Properties](https://news.slashdot.org/story/25/12/31/1834240/njs-answer-to-flooding-it-has-bought-out-and-demolished-1200-properties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 19:46:00](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss) - [Jolla&apos;s Community Linux Phone Surpasses its Funding Goal](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss)
* [2025-12-31, 18:37:34](https://lobste.rs/s/sp7fkl/on_privacy_control_my_tech_setup) - [On Privacy and control. My tech setup](https://toidiu.com/blog/2025-12-25-privacy-and-control/)
* [2025-12-31, 18:26:32](https://news.ycombinator.com/item?id=46446815) - [I canceled my book deal](https://austinhenley.com/blog/canceledbookdeal.html)
* [2025-12-31, 17:42:20](https://news.ycombinator.com/item?id=46446366) - [Web Browsers have stopped blocking pop-ups](https://www.smokingonabike.com/2025/12/31/web-browsers-have-stopped-blocking-pop-ups/)
* [2025-12-31, 17:26:25](https://lobste.rs/s/whjn41/apple_file_system_reference_2020) - [Apple File System Reference (2020)](https://developer.apple.com/support/downloads/Apple-File-System-Reference.pdf)
* [2025-12-31, 15:46:34](https://news.ycombinator.com/item?id=46445131) - [The compiler is your best friend](https://blog.daniel-beskin.com/2025-12-22-the-compiler-is-your-best-friend-stop-lying-to-it)
* [2025-12-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss) - [Closure of US Institute Will Do Immense Harm to Climate Research](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss)
* [2025-12-31, 14:19:21](https://news.ycombinator.com/item?id=46444249) - [Iron Beam: Israel&apos;s first operational anti drone laser system](https://mod.gov.il/en/press-releases/press-room/israel-mod-and-rafael-deliver-first-operational-high-power-laser-system-iron-beam-to-the-idf)
* [2025-12-31, 13:02:48](https://news.ycombinator.com/item?id=46443744) - [Tell HN: Happy New Year](https://news.ycombinator.com/item?id=46443744)
* [2025-12-31, 11:19:31](https://lobste.rs/s/x6ruya/using_corne_split_keyboard_for_half_year) - [Using The Corne Split Keyboard For Half A Year](https://rugu.dev/en/blog/corne/)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 10:12:51](https://news.ycombinator.com/item?id=46442903) - [Akin&apos;s Laws of Spacecraft Design (2011) [pdf]](https://www.ece.uvic.ca/~elec399/201409/Akin%27s%20Laws%20of%20Spacecraft%20Design.pdf)
* [2025-12-31, 09:59:10](https://lobste.rs/s/z3ckd3/fixing_buffer_overflow_unix_v4_like_it_s) - [Fixing a Buffer Overflow in UNIX v4 Like It&apos;s 1973](https://sigma-star.at/blog/2025/12/unix-v4-buffer-overflow/)
* [2025-12-31, 09:49:46](https://lobste.rs/s/3cwha2/solid_load_bull) - [A SOLID Load of Bull](https://loup-vaillant.fr/articles/solid-bull)
* [2025-12-31, 07:47:44](https://news.ycombinator.com/item?id=46442245) - [Show HN: Use Claude Code to Query 600 GB Indexes over Hacker News, ArXiv, etc.](https://exopriors.com/scry)
* [2025-12-31, 07:34:20](https://lobste.rs/s/13cyor/mastodon_stories_for_systemd_v259) - [Mastodon Stories for systemd v259](https://0pointer.net/blog/mastodon-stories-for-systemd-v259.html)
* [2025-12-31, 05:35:00](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss)
* [2025-12-31, 03:52:12](https://lobste.rs/s/npnchn/what_are_some_interesting_projects_you_ve) - [What are some interesting projects that you&apos;ve done this year?](https://lobste.rs/s/npnchn/what_are_some_interesting_projects_you_ve)
* [2025-12-31, 00:53:00](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss) - [Is Proton Leaving Switzerland? \&quot;Legal Uncertainty\&quot; of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss)
* [2025-12-30, 20:04:00](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss) - [Beware of OpenAI&apos;s &apos;Grantwashing&apos; on AI Harms](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss)
* [2025-12-30, 15:23:00](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss) - [First Ever Version of UNIX Written in C is Running Again](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss)
* [2025-12-30, 10:36:00](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss) - [South Korea to Require Facial Recognition for New Mobile Numbers](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss)
* [2025-12-30, 05:53:00](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss) - [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss)
* [2025-12-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss) - [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss)
* [2025-12-29, 20:25:00](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss) - [Engineer Turns E-Ink Tablet Into Computer Monitor in Linux](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss)
* [2025-12-29, 15:36:00](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss) - [LG Forces TV Owners to Use Microsoft ‘AI’ Copilot App You Can&apos;t Uninstall and Nobody Asked for](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss)
* [2025-12-29, 10:52:00](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss) - [How Recent is \&quot;Recent\&quot;?](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss)
* [2025-12-29, 06:09:00](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss) - [Microsoft&apos;s Research Dream to Replace All C/C++ With Rust by 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss)
* [2025-12-29, 03:25:35](https://news.ycombinator.com/item?id=46417162) - [Demystifying DVDs](https://hiddenpalace.org/News/One_Bad_Ass_Hedgehog_-_Shadow_the_Hedgehog#Demystifying_DVDs)
* [2025-12-29, 01:17:00](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss) - [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss)
* [2025-12-28, 20:37:00](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss) - [Your Car&apos;s Web Browser May be on the Road to Cyber Ruin](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss)
* [2025-12-28, 17:00:00](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss) - [The 39th Chaos Communication Congress (39C3) Taking Place Now in Hamburg Through 30 Dec 2025](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss)
* [2025-12-28, 15:49:00](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss) - [How OpenAI is Using GPT-5 Codex to Improve the AI Tool Itself](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss)
* [2025-12-28, 11:02:00](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss) - [Will AI Kill All the Lawyers?](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss)
* [2025-12-28, 09:50:02](https://news.ycombinator.com/item?id=46409830) - [Build Software. Build Users](https://dima.day/blog/build-software-build-users/)
* [2025-12-28, 06:19:00](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss) - [Texas Sues TV Makers for Taking Screenshots of What People Watch](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss)
* [2025-12-28, 01:33:00](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss) - [Who Sets the Doomsday Clock?](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss)
* [2025-12-28, 01:00:52](https://news.ycombinator.com/item?id=46407292) - [Show HN: I created a tool to design and create foamcore inserts for boardgames](https://boxinsertdesigner.com/)
