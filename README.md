# [News Summary](https://kherrick.github.io/news-summary/)

## Censorship and Privacy Concerns

* [Against the Censorship of Adult Content by Payment Processors](https://soatok.blog/2025/07/24/against-the-censorship-of-adult-content-by-payment-processors/) - This article delves into how payment processors are influencing internet content by limiting services for adult content creators, raising questions on the boundaries of corporate influence. [Comments](https://news.ycombinator.com/item?id=44679406)

* [Jitsi privacy flaw that enables one-click stealth audio and video capture](https://zimzi.substack.com/p/jitsi-privacy-flaw-that-enables-one) - A concerning privacy flaw in Jitsi allows surreptitious capture of audio and video with minimal effort, sparking debates on security in video conferencing. [Comments](https://lobste.rs/s/ityek6/jitsi_privacy_flaw_enables_one_click)

## Innovative Technologies

* [Scientists Are Developing Artificial Blood That Could Save Lives In Emergencies](https://science.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Artificial blood, a breakthrough in medical science, promises to revolutionize emergency care and save countless lives. [Comments](https://news.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [How Anthropic teams use Claude Code](https://www.anthropic.com/news/how-anthropic-teams-use-claude-code) - Anthropic reveals insights into its Claude Code system, showcasing advancements in AI-driven coding tools. [Comments](https://news.ycombinator.com/item?id=44678535)

## Cybersecurity and Legal Issues

* [UK Student Jailed For Selling Phishing Kits Linked To $135M of Fraud](https://news.slashdot.org/story/25/07/25/0055206/uk-student-jailed-for-selling-phishing-kits-linked-to-135m-of-fraud?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A UK student's sophisticated phishing schemes linked to massive financial fraud highlight ongoing cybercrime challenges. [Comments](https://news.slashdot.org/story/25/07/25/0055206/uk-student-jailed-for-selling-phishing-kits-linked-to-135m-of-fraud?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Space Exploration and Technology

* [How the Space Shuttles Were Given Better Names Thanks to Star Trek](https://soylentnews.org/article.pl?sid=25/07/24/1023256&from=rss) - A fascinating retelling of how Star Trek-inspired names for space shuttles brought cultural and scientific worlds together. [Comments](https://soylentnews.org/article.pl?sid=25/07/24/1023256&from=rss)

## Programming and Development Insights

* [Use Your Type System](https://www.dzombak.com/blog/2025/07/use-your-type-system/) - This article advocates for the thoughtful use of type systems in programming to improve robustness and reduce errors. [Comments](https://lobste.rs/s/a9frrj/use_your_type_system)

## Economic and Corporate News

* [Intel Will Shed 24,000 Employees This Year, Retreat In Germany, Poland, Costa Rica, and Ohio](https://hardware.slashdot.org/story/25/07/24/2339237/intel-will-shed-24000-employees-this-year-retreat-in-germany-poland-costa-rica-and-ohio?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Intel plans to downsize its workforce and operations in several regions, pointing to shifting priorities and economic challenges. [Comments](https://hardware.slashdot.org/story/25/07/24/2339237/intel-will-shed-24000-employees-this-year-retreat-in-germany-poland-costa-rica-and-ohio?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-07-25, 03:49:10](https://news.ycombinator.com/item?id=44679406) - [Against the Censorship of Adult Content by Payment Processors](https://soatok.blog/2025/07/24/against-the-censorship-of-adult-content-by-payment-processors/)
* [2025-07-25, 02:50:32](https://news.ycombinator.com/item?id=44679048) - [Asciinema: Record and share your terminal sessions](https://asciinema.org)
* [2025-07-25, 01:43:27](https://news.ycombinator.com/item?id=44678535) - [How Anthropic teams use Claude Code](https://www.anthropic.com/news/how-anthropic-teams-use-claude-code)
* [2025-07-25, 01:40:00](https://news.slashdot.org/story/25/07/25/0055206/uk-student-jailed-for-selling-phishing-kits-linked-to-135m-of-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Student Jailed For Selling Phishing Kits Linked To $135M of Fraud](https://news.slashdot.org/story/25/07/25/0055206/uk-student-jailed-for-selling-phishing-kits-linked-to-135m-of-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 01:00:00](https://science.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Are Developing Artificial Blood That Could Save Lives In Emergencies](https://science.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 00:39:55](https://news.ycombinator.com/item?id=44678112) - [Alto turns your Apple Notes into a website](https://alto.so/)
* [2025-07-25, 00:28:00](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss) - [How the Space Shuttles Were Given Better Names Thanks to Star Trek](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss)
* [2025-07-25, 00:16:35](https://lobste.rs/s/az8v5r/renting_is_for_suckers) - [Renting is for Suckers](https://andrewkelley.me/post/renting-is-for-suckers.html)
* [2025-07-25, 00:04:50](https://lobste.rs/s/ozsbpi/relational_thinking_j) - [Relational Thinking in J](https://storytotell.org/relational-thinking-in-j)
* [2025-07-24, 23:42:00](https://hardware.slashdot.org/story/25/07/24/2339237/intel-will-shed-24000-employees-this-year-retreat-in-germany-poland-costa-rica-and-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Will Shed 24,000 Employees This Year, Retreat In Germany, Poland, Costa Rica, and Ohio](https://hardware.slashdot.org/story/25/07/24/2339237/intel-will-shed-24000-employees-this-year-retreat-in-germany-poland-costa-rica-and-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 22:52:51](https://lobste.rs/s/abbg3j/when_is_webassembly_going_get_dom_support) - [When Is WebAssembly Going to Get DOM Support? Or, how I learned to stop worrying and love glue code](https://queue.acm.org/detail.cfm?id=3746174)
* [2025-07-24, 22:50:56](https://lobste.rs/s/a9frrj/use_your_type_system) - [Use Your Type System](https://www.dzombak.com/blog/2025/07/use-your-type-system/)
* [2025-07-24, 22:40:00](https://news.slashdot.org/story/25/07/24/2030244/amd-ceo-sees-chips-from-tsmcs-us-plant-costing-5-20-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD CEO Sees Chips From TSMC&apos;s US Plant Costing 5%-20% More](https://news.slashdot.org/story/25/07/24/2030244/amd-ceo-sees-chips-from-tsmcs-us-plant-costing-5-20-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 22:14:20](https://news.ycombinator.com/item?id=44676961) - [A GPU Calculator That Helps Calculate What GPU to Use](https://calculator.inference.ai/)
* [2025-07-24, 22:00:00](https://tech.slashdot.org/story/25/07/24/2019225/trump-who-promised-to-save-tiktok-threatens-to-shut-down-tiktok?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump, Who Promised To Save TikTok, Threatens To Shut Down TikTok](https://tech.slashdot.org/story/25/07/24/2019225/trump-who-promised-to-save-tiktok-threatens-to-shut-down-tiktok?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 21:59:19](https://news.ycombinator.com/item?id=44676817) - [Scientists may have found a way to eliminate chromosome linked to Down syndrome](https://academic.oup.com/pnasnexus/article/4/2/pgaf022/8016019)
* [2025-07-24, 21:48:53](https://news.ycombinator.com/item?id=44676691) - [Graphene OS: a security-enhanced Android build](https://lwn.net/SubscriberLink/1030004/898017c7953c0946/)
* [2025-07-24, 21:39:08](https://news.ycombinator.com/item?id=44676559) - [Visa and Mastercard: The global payment duopoly (2024)](https://quartr.com/insights/edge/visa-and-mastercard-the-global-payment-duopoly)
* [2025-07-24, 21:22:15](https://news.ycombinator.com/item?id=44676348) - [Revisiting Moneyball](https://djpardis.medium.com/revisiting-moneyball-074fc2435b07)
* [2025-07-24, 21:20:01](https://news.ycombinator.com/item?id=44676315) - [New Aarch64 Back End](https://ziglang.org/devlog/2025/#2025-07-23)
* [2025-07-24, 21:20:00](https://tech.slashdot.org/story/25/07/24/2012243/google-url-shortener-links-will-stop-working-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google URL Shortener Links Will Stop Working Next Month](https://tech.slashdot.org/story/25/07/24/2012243/google-url-shortener-links-will-stop-working-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 21:18:04](https://lobste.rs/s/qpbfsa/new_aarch64_backend) - [New Aarch64 Backend](https://ziglang.org/devlog/2025/#2025-07-23)
* [2025-07-24, 20:52:41](https://news.ycombinator.com/item?id=44675965) - [Intel CEO Letter to Employees](https://morethanmoore.substack.com/p/intel-ceo-letter-to-employees)
* [2025-07-24, 20:40:00](https://apple.slashdot.org/story/25/07/24/205229/apple-releases-public-betas-of-its-new-software-updates-with-liquid-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Releases Public Betas of Its New Software Updates With Liquid Glass](https://apple.slashdot.org/story/25/07/24/205229/apple-releases-public-betas-of-its-new-software-updates-with-liquid-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 20:24:00](https://tech.slashdot.org/story/25/07/24/2022240/starlink-suffers-worldwide-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starlink Suffers Worldwide Outage](https://tech.slashdot.org/story/25/07/24/2022240/starlink-suffers-worldwide-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 20:21:03](https://lobste.rs/s/llo8k8/racket_as_first_language) - [Racket as a first language](https://felleisen.org/matthias/Thoughts/py.html)
* [2025-07-24, 20:19:57](https://news.ycombinator.com/item?id=44675553) - [Inter-Planetary Network Special Interest Group](https://www.ipnsig.org)
* [2025-07-24, 20:07:27](https://lobste.rs/s/0cwrcl/rfc_9773_acme_renewal_information_ari) - [RFC 9773: ACME Renewal Information (ARI) Extension](https://datatracker.ietf.org/doc/rfc9773/)
* [2025-07-24, 20:03:00](https://tech.slashdot.org/story/25/07/24/201240/googles-new-web-guide-uses-ai-to-organize-the-search-results-page?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s New &apos;Web Guide&apos; Uses AI To Organize the Search Results Page](https://tech.slashdot.org/story/25/07/24/201240/googles-new-web-guide-uses-ai-to-organize-the-search-results-page?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 19:41:00](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss) - [mwm: An X11 Window Manager in 20 Lines of Code](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss)
* [2025-07-24, 18:46:53](https://lobste.rs/s/hvrsfx/fastlanes_file_format) - [The FastLanes File Format](https://github.com/cwida/FastLanes/blob/dev/docs/specification.pdf)
* [2025-07-24, 18:16:03](https://news.ycombinator.com/item?id=44674123) - [Air Force unit suspends use of Sig Sauer pistol after shooting death of airman](https://www.nhpr.org/nh-news/2025-07-23/sig-sauer-pistol-air-force-shooting-death)
* [2025-07-24, 18:07:00](https://slashdot.org/story/25/07/24/187250/microsoft-ceo-addresses-enigma-of-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft CEO Addresses &apos;Enigma&apos; of Layoffs](https://slashdot.org/story/25/07/24/187250/microsoft-ceo-addresses-enigma-of-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 17:25:59](https://lobste.rs/s/ityek6/jitsi_privacy_flaw_enables_one_click) - [Jitsi privacy flaw that enables one-click stealth audio and video capture](https://zimzi.substack.com/p/jitsi-privacy-flaw-that-enables-one)
* [2025-07-24, 17:25:00](https://science.slashdot.org/story/25/07/24/1725222/an-inventor-is-injecting-bleach-into-cancerous-tumors---and-wants-to-bring-the-treatment-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Inventor Is Injecting Bleach Into Cancerous Tumors - and Wants to Bring the Treatment To the US](https://science.slashdot.org/story/25/07/24/1725222/an-inventor-is-injecting-bleach-into-cancerous-tumors---and-wants-to-bring-the-treatment-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 16:44:00](https://news.slashdot.org/story/25/07/24/1643252/boiling-frog-effect-makes-people-oblivious-to-threat-of-climate-crisis-shows-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Boiling Frog&apos; Effect Makes People Oblivious To Threat of Climate Crisis, Shows Study](https://news.slashdot.org/story/25/07/24/1643252/boiling-frog-effect-makes-people-oblivious-to-threat-of-climate-crisis-shows-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 16:09:00](https://yro.slashdot.org/story/25/07/24/169213/satellite-imagery-and-phone-data-reveal-romance-scam-centers-still-expanding-despite-crackdowns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Satellite Imagery and Phone Data Reveal Romance Scam Centers Still Expanding Despite Crackdowns](https://yro.slashdot.org/story/25/07/24/169213/satellite-imagery-and-phone-data-reveal-romance-scam-centers-still-expanding-despite-crackdowns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 15:38:34](https://lobste.rs/s/b6iupp/code_creation_way_nature_intended) - [Code Creation, The Way Nature Intended](https://pehringer.info/code_creation)
* [2025-07-24, 15:35:39](https://news.ycombinator.com/item?id=44672003) - [There is no memory safety without thread safety](https://www.ralfj.de/blog/2025/07/24/memory-safety.html)
* [2025-07-24, 15:24:00](https://yro.slashdot.org/story/25/07/24/1524209/nfts-qualify-for-trademark-protection-ninth-circuit-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NFTs Qualify For Trademark Protection, Ninth Circuit Rules](https://yro.slashdot.org/story/25/07/24/1524209/nfts-qualify-for-trademark-protection-ninth-circuit-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 15:18:10](https://lobste.rs/s/omasxh/there_is_no_memory_safety_without_thread) - [There is no memory safety without thread safety](https://www.ralfj.de/blog/2025/07/24/memory-safety.html)
* [2025-07-24, 15:05:12](https://news.ycombinator.com/item?id=44671601) - [Show HN: Nia – MCP server that gives more docs and repos to coding agents](https://www.trynia.ai/)
* [2025-07-24, 14:59:15](https://lobste.rs/s/rmlaoa/fallout_s_memory_model) - [Fallout&apos;s Memory Model](https://youtube.com/watch?v=6kB_fko6SIg)
* [2025-07-24, 14:57:05](https://news.ycombinator.com/item?id=44671484) - [Use Your Type System](https://www.dzombak.com/blog/2025/07/use-your-type-system/)
* [2025-07-24, 14:56:00](https://soylentnews.org/article.pl?sid=25/07/23/1245206&amp;from=rss) - [Real Milk Proteins, No Cows: Engineered Bacteria Pave the Way for Vegan Cheese and Yogurt](https://soylentnews.org/article.pl?sid=25/07/23/1245206&amp;from=rss)
* [2025-07-24, 14:48:30](https://lobste.rs/s/aartyj/psa_sqlite_wal_checksums_fail_silently) - [PSA: SQLite WAL checksums fail silently and may lose data](https://avi.im/blag/2025/sqlite-wal-checksum/)
* [2025-07-24, 14:48:04](https://news.ycombinator.com/item?id=44671373) - [PSA: SQLite WAL checksums fail silently and may lose data](https://avi.im/blag/2025/sqlite-wal-checksum/)
* [2025-07-24, 14:42:00](https://slashdot.org/story/25/07/24/1442257/board-game-crowdfunding-platform-gamefound-acquires-indiegogo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Board Game Crowdfunding Platform Gamefound Acquires Indiegogo](https://slashdot.org/story/25/07/24/1442257/board-game-crowdfunding-platform-gamefound-acquires-indiegogo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 14:11:35](https://lobste.rs/s/41opbb/arch_linux_dev_blog) - [Arch Linux Dev Blog](https://devblog.archlinux.page/)
* [2025-07-24, 13:17:24](https://news.ycombinator.com/item?id=44670326) - [UK: Phone networks down: EE, BT, Three, Vodafone, O2 not working in mass outage](https://www.the-independent.com/tech/ee-bt-three-vodafone-o2-down-phone-networks-outage-latest-b2795260.html)
* [2025-07-24, 13:14:09](https://lobste.rs/s/tao1sp/valid_html_zip_bomb) - [A valid HTML zip bomb](https://ache.one/notes/html_zip_bomb)
* [2025-07-24, 12:47:29](https://news.ycombinator.com/item?id=44669998) - [Vet is a safety net for the curl | bash pattern](https://github.com/vet-run/vet)
* [2025-07-24, 12:29:35](https://news.ycombinator.com/item?id=44669858) - [Open Source Maintenance Fee](https://github.com/wixtoolset/issues/issues/8974)
* [2025-07-24, 12:16:28](https://lobste.rs/s/sf2q8y/wayback_0_1_released) - [Wayback 0.1 released](https://wayback.freedesktop.org/news/2025/07/23/wayback-0.1-released/)
* [2025-07-24, 10:15:00](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss) - [Bots, Spiders, Scrapers and AI - Connections to SN](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss)
* [2025-07-24, 10:11:00](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss) - [Fearful of AI-Generated Grant Proposals, NIH Limits Scientists to Six Applications Per Year](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss)
* [2025-07-24, 09:12:07](https://lobste.rs/s/jcfozl/how_much_do_you_spend_on_ai_assisted_tools) - [How much do you spend on AI-assisted tools?](https://lobste.rs/s/jcfozl/how_much_do_you_spend_on_ai_assisted_tools)
* [2025-07-24, 06:23:36](https://lobste.rs/s/p1fztx/systemd_258_rc1_is_massive_feature) - [systemd 258-rc1 Is A Massive Feature Release With New Tools, More Than 260 Changes](https://www.phoronix.com/news/systemd-258-rc1)
* [2025-07-24, 06:04:03](https://lobste.rs/s/ucm2ip/jnj_j_janet) - [JNJ: J iN Janet](https://sr.ht/~subsetpark/JNJ/)
* [2025-07-24, 05:28:00](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss) - [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People&apos;s Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss)
* [2025-07-24, 00:51:11](https://lobste.rs/s/hip584/death_industrial_design_era_dull) - [The Death Of Industrial Design And The Era Of Dull Electronics](https://hackaday.com/2025/07/23/the-death-of-industrial-design-and-the-era-of-dull-electronics/)
* [2025-07-24, 00:39:00](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss) - [SharePoint Vulnerability With 9.8 Severity Rating Under Exploit Across Globe](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss)
* [2025-07-23, 20:45:32](https://lobste.rs/s/yd7mzj/developing_our_position_on_ai) - [Developing our position on AI](https://www.recurse.com/blog/191-developing-our-position-on-ai)
* [2025-07-23, 19:54:00](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss) - [Conversations Between LLMs Could Automate the Creation of Exploits, Study Shows](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss)
* [2025-07-23, 19:34:56](https://news.ycombinator.com/item?id=44663074) - [AMD CEO sees chips from TSMC&apos;s US plant costing 5%-20% more](https://www.bloomberg.com/news/articles/2025-07-23/amd-ceo-su-sees-chips-from-us-tsmc-plant-costing-5-to-20-more)
* [2025-07-23, 18:21:29](https://lobste.rs/s/sk2yop/you_can_now_disable_all_ai_features_zed) - [You Can Now Disable All AI Features in Zed](https://zed.dev/blog/disable-ai-features)
* [2025-07-23, 16:14:40](https://lobste.rs/s/x6qsw2/how_we_discovered_recovered_from) - [How we discovered, and recovered from, Postgres corruption on the matrix.org homeserver](https://matrix.org/blog/2025/07/postgres-corruption-postmortem/)
* [2025-07-23, 15:10:00](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss) - [Microsoft Wants to Find Out Why Windows 11 is So Slow](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss)
* [2025-07-23, 14:35:04](https://lobste.rs/s/w2l7hb/migrating_zfs_pool_from_raidz1_raidz2) - [Migrating a ZFS pool from RAIDZ1 to RAIDZ2](https://mtlynch.io/raidz1-to-raidz2/)
* [2025-07-23, 11:32:31](https://lobste.rs/s/ixfukh/font_size_adjust_is_useful) - [font-size-adjust Is Useful](https://matklad.github.io/2025/07/16/font-size-adjust.html)
* [2025-07-23, 10:24:00](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss) - [The Atomic Bomb Marker Inside Your Body](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss)
* [2025-07-23, 05:35:00](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss) - [Matson Suspends Shipping EVs Citing Hazards of Lithium-ion Batteries](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss)
* [2025-07-23, 00:54:00](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) - [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss)
* [2025-07-22, 20:09:00](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss) - [Popular Sugar Substitute Linked to Brain Cell Damage and Stroke Risk](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss)
* [2025-07-22, 18:48:00](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss) - [RIP - Ozzy Osborne](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss)
* [2025-07-22, 15:22:00](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss)
* [2025-07-22, 10:33:00](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss) - [Microsoft Says It Will No Longer Use Engineers in China for Department of Defense Work](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
* [2025-07-21, 20:19:00](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss)
* [2025-07-21, 15:42:39](https://news.ycombinator.com/item?id=44636534) - [modernish](https://github.com/modernish/modernish)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 15:20:49](https://news.ycombinator.com/item?id=44636240) - [Covers as a way of learning music and code](https://ntietz.com/blog/covers-as-a-way-of-learning/)
* [2025-07-21, 13:52:33](https://news.ycombinator.com/item?id=44635105) - [Low-Temp 2D Semiconductors: A Chipmaking Shift](https://spectrum.ieee.org/cdimensions-2d-semiconductors)
* [2025-07-21, 12:59:56](https://news.ycombinator.com/item?id=44634598) - [Positron – A next-generation data science IDE](https://positron.posit.co/)
* [2025-07-21, 12:57:26](https://news.ycombinator.com/item?id=44634576) - [Why concatenative programming matters (2012)](http://evincarofautumn.blogspot.com/2012/02/why-concatenative-programming-matters.html)
* [2025-07-21, 12:04:49](https://news.ycombinator.com/item?id=44634208) - [Mwm – The smallest usable X11 window manager](https://github.com/lslvr/mwm)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 08:42:05](https://news.ycombinator.com/item?id=44633024) - [RE#: High performance derivative-based regular expression matching (2024)](https://arxiv.org/abs/2407.20479)
* [2025-07-21, 07:40:01](https://news.ycombinator.com/item?id=44632674) - [I wasted weeks hand optimizing assembly because I benchmarked on random data](https://www.vidarholen.net/contents/blog/?p=1160)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
