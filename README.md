# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Challenges

* [Terence Tao: Quantitative AI progress needs accurate and transparent evaluation](https://mathstodon.xyz/@tao/114910028356641733) ([comments](https://news.ycombinator.com/item?id=44680308))

* [Scientists Are Developing Artificial Blood That Could Save Lives In Emergencies](https://science.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Google spoofed via DKIM replay attack: A technical breakdown](https://easydmarc.com/blog/google-spoofed-via-dkim-replay-attack-a-technical-breakdown/) ([comments](https://news.ycombinator.com/item?id=44679854))

* [A GPU Calculator That Helps Calculate What GPU to Use](https://calculator.inference.ai/) ([comments](https://news.ycombinator.com/item?id=44676961))

* [The FastLanes File Format](https://github.com/cwida/FastLanes/blob/dev/docs/specification.pdf) ([comments](https://lobste.rs/s/hvrsfx/fastlanes_file_format))

## Security and Privacy

* [Jitsi privacy flaw that enables one-click stealth audio and video capture](https://zimzi.substack.com/p/jitsi-privacy-flaw-that-enables-one) ([comments](https://lobste.rs/s/ityek6/jitsi_privacy_flaw_enables_one_click))

* [Intel Will Shed 24,000 Employees This Year, Retreat In Germany, Poland, Costa Rica, and Ohio](https://hardware.slashdot.org/story/25/07/24/2339237/intel-will-shed-24000-employees-this-year-retreat-in-germany-poland-costa-rica-and-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/07/24/2339237/intel-will-shed-24000-employees-this-year-retreat-in-germany-poland-costa-rica-and-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People's Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss))

## Programming and Development Tools

* [That time I wasted weeks hand optimizing assembly because I benchmarked on random data](https://www.vidarholen.net/contents/blog/?p=1160) ([comments](https://lobste.rs/s/xtiwkr/time_i_wasted_weeks_hand_optimizing))

* [Use Your Type System](https://www.dzombak.com/blog/2025/07/use-your-type-system/) ([comments](https://lobste.rs/s/a9frrj/use_your_type_system))

* [Racket as a first language](https://felleisen.org/matthias/Thoughts/py.html) ([comments](https://lobste.rs/s/llo8k8/racket_as_first_language))

## Gaming Insights

* [Programming Vehicles in Games](https://www.youtube.com/watch?v=MrIAw980iYg) ([comments](https://lobste.rs/s/xxtnsf/programming_vehicles_games))

* [Games Look Bad: HDR and Tone Mapping](https://ventspace.wordpress.com/2017/10/20/games-look-bad-part-1-hdr-and-tone-mapping/) ([comments](https://news.ycombinator.com/item?id=44680547))

* [Nuclear Reactor SIM by PeteTimesSix](https://petetimessix.itch.io/nuclear-reactors) ([comments](https://news.ycombinator.com/item?id=44639563))

## Exploration and History

* [How the Space Shuttles Were Given Better Names Thanks to Star Trek](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss))

* [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss))

* [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss))

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

* [2025-07-25, 09:14:18](https://lobste.rs/s/xtiwkr/time_i_wasted_weeks_hand_optimizing) - [That time I wasted weeks hand optimizing assembly because I benchmarked on random data](https://www.vidarholen.net/contents/blog/?p=1160)
* [2025-07-25, 08:44:43](https://lobste.rs/s/xxtnsf/programming_vehicles_games) - [Programming Vehicles in Games](https://www.youtube.com/watch?v=MrIAw980iYg)
* [2025-07-25, 08:18:28](https://lobste.rs/s/bva342/vet_command_line_tool_acts_as_safety_net) - [vet a command-line tool that acts as a safety net for the risky curl | bash pattern](https://github.com/vet-run/vet)
* [2025-07-25, 08:16:21](https://lobste.rs/s/7cffqo/celebrating_20_years_mdn) - [Celebrating 20 years of MDN](https://developer.mozilla.org/en-US/blog/mdn-turns-20/)
* [2025-07-25, 07:26:37](https://news.ycombinator.com/item?id=44680547) - [Games Look Bad: HDR and Tone Mapping](https://ventspace.wordpress.com/2017/10/20/games-look-bad-part-1-hdr-and-tone-mapping/)
* [2025-07-25, 06:47:07](https://news.ycombinator.com/item?id=44680308) - [Terence Tao: Quantitative AI progress needs accurate and transparent evaluation](https://mathstodon.xyz/@tao/114910028356641733)
* [2025-07-25, 06:18:27](https://lobste.rs/s/dzqdtj/three_http_versions_later_forms_are_still) - [Three HTTP versions later, forms are still a mess](https://yorickpeterse.com/articles/three-http-versions-later-forms-are-still-a-mess/)
* [2025-07-25, 05:28:40](https://news.ycombinator.com/item?id=44679854) - [Google spoofed via DKIM replay attack: A technical breakdown](https://easydmarc.com/blog/google-spoofed-via-dkim-replay-attack-a-technical-breakdown/)
* [2025-07-25, 05:17:00](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss) - [&apos;I Destroyed Months of Your Work in Seconds&apos; Says AI Coding Tool ](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss)
* [2025-07-25, 04:59:45](https://lobste.rs/s/lwluih/webtransport_implementation_c) - [A WebTransport implementation in C](https://github.com/andrewmd5/libwtf)
* [2025-07-25, 02:50:32](https://news.ycombinator.com/item?id=44679048) - [Asciinema: Record and share your terminal sessions](https://asciinema.org)
* [2025-07-25, 01:40:11](https://news.ycombinator.com/item?id=44678512) - [Celebrating 20 Years of MDN](https://developer.mozilla.org/en-US/blog/mdn-turns-20/)
* [2025-07-25, 01:40:00](https://news.slashdot.org/story/25/07/25/0055206/uk-student-jailed-for-selling-phishing-kits-linked-to-135m-of-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Student Jailed For Selling Phishing Kits Linked To $135M of Fraud](https://news.slashdot.org/story/25/07/25/0055206/uk-student-jailed-for-selling-phishing-kits-linked-to-135m-of-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 01:00:00](https://science.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Are Developing Artificial Blood That Could Save Lives In Emergencies](https://science.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
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
* [2025-07-24, 21:22:15](https://news.ycombinator.com/item?id=44676348) - [Revisiting Moneyball](https://djpardis.medium.com/revisiting-moneyball-074fc2435b07)
* [2025-07-24, 21:20:01](https://news.ycombinator.com/item?id=44676315) - [New Aarch64 Back End](https://ziglang.org/devlog/2025/#2025-07-23)
* [2025-07-24, 21:20:00](https://tech.slashdot.org/story/25/07/24/2012243/google-url-shortener-links-will-stop-working-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google URL Shortener Links Will Stop Working Next Month](https://tech.slashdot.org/story/25/07/24/2012243/google-url-shortener-links-will-stop-working-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 21:18:04](https://lobste.rs/s/qpbfsa/new_aarch64_backend) - [New Aarch64 Backend](https://ziglang.org/devlog/2025/#2025-07-23)
* [2025-07-24, 20:40:00](https://apple.slashdot.org/story/25/07/24/205229/apple-releases-public-betas-of-its-new-software-updates-with-liquid-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Releases Public Betas of Its New Software Updates With Liquid Glass](https://apple.slashdot.org/story/25/07/24/205229/apple-releases-public-betas-of-its-new-software-updates-with-liquid-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 20:24:00](https://tech.slashdot.org/story/25/07/24/2022240/starlink-suffers-worldwide-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starlink Suffers Worldwide Outage](https://tech.slashdot.org/story/25/07/24/2022240/starlink-suffers-worldwide-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 20:21:03](https://lobste.rs/s/llo8k8/racket_as_first_language) - [Racket as a first language](https://felleisen.org/matthias/Thoughts/py.html)
* [2025-07-24, 20:19:57](https://news.ycombinator.com/item?id=44675553) - [Inter-Planetary Network Special Interest Group](https://www.ipnsig.org)
* [2025-07-24, 20:03:00](https://tech.slashdot.org/story/25/07/24/201240/googles-new-web-guide-uses-ai-to-organize-the-search-results-page?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s New &apos;Web Guide&apos; Uses AI To Organize the Search Results Page](https://tech.slashdot.org/story/25/07/24/201240/googles-new-web-guide-uses-ai-to-organize-the-search-results-page?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 19:41:00](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss) - [mwm: An X11 Window Manager in 20 Lines of Code](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss)
* [2025-07-24, 18:46:53](https://lobste.rs/s/hvrsfx/fastlanes_file_format) - [The FastLanes File Format](https://github.com/cwida/FastLanes/blob/dev/docs/specification.pdf)
* [2025-07-24, 18:16:03](https://news.ycombinator.com/item?id=44674123) - [Air Force unit suspends use of Sig Sauer pistol after shooting death of airman](https://www.nhpr.org/nh-news/2025-07-23/sig-sauer-pistol-air-force-shooting-death)
* [2025-07-24, 18:07:00](https://slashdot.org/story/25/07/24/187250/microsoft-ceo-addresses-enigma-of-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft CEO Addresses &apos;Enigma&apos; of Layoffs](https://slashdot.org/story/25/07/24/187250/microsoft-ceo-addresses-enigma-of-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 17:25:59](https://lobste.rs/s/ityek6/jitsi_privacy_flaw_enables_one_click) - [Jitsi privacy flaw that enables one-click stealth audio and video capture](https://zimzi.substack.com/p/jitsi-privacy-flaw-that-enables-one)
* [2025-07-24, 17:25:00](https://science.slashdot.org/story/25/07/24/1725222/an-inventor-is-injecting-bleach-into-cancerous-tumors---and-wants-to-bring-the-treatment-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Inventor Is Injecting Bleach Into Cancerous Tumors - and Wants to Bring the Treatment To the US](https://science.slashdot.org/story/25/07/24/1725222/an-inventor-is-injecting-bleach-into-cancerous-tumors---and-wants-to-bring-the-treatment-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 16:44:00](https://news.slashdot.org/story/25/07/24/1643252/boiling-frog-effect-makes-people-oblivious-to-threat-of-climate-crisis-shows-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Boiling Frog&apos; Effect Makes People Oblivious To Threat of Climate Crisis, Shows Study](https://news.slashdot.org/story/25/07/24/1643252/boiling-frog-effect-makes-people-oblivious-to-threat-of-climate-crisis-shows-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 16:09:00](https://yro.slashdot.org/story/25/07/24/169213/satellite-imagery-and-phone-data-reveal-romance-scam-centers-still-expanding-despite-crackdowns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Satellite Imagery and Phone Data Reveal Romance Scam Centers Still Expanding Despite Crackdowns](https://yro.slashdot.org/story/25/07/24/169213/satellite-imagery-and-phone-data-reveal-romance-scam-centers-still-expanding-despite-crackdowns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
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
* [2025-07-24, 13:14:09](https://lobste.rs/s/tao1sp/valid_html_zip_bomb) - [A valid HTML zip bomb](https://ache.one/notes/html_zip_bomb)
* [2025-07-24, 12:47:29](https://news.ycombinator.com/item?id=44669998) - [Vet is a safety net for the curl | bash pattern](https://github.com/vet-run/vet)
* [2025-07-24, 12:29:35](https://news.ycombinator.com/item?id=44669858) - [Open Source Maintenance Fee](https://github.com/wixtoolset/issues/issues/8974)
* [2025-07-24, 12:16:28](https://lobste.rs/s/sf2q8y/wayback_0_1_released) - [Wayback 0.1 released](https://wayback.freedesktop.org/news/2025/07/23/wayback-0.1-released/)
* [2025-07-24, 10:15:00](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss) - [Bots, Spiders, Scrapers and AI - Connections to SN](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss)
* [2025-07-24, 10:11:00](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss) - [Fearful of AI-Generated Grant Proposals, NIH Limits Scientists to Six Applications Per Year](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss)
* [2025-07-24, 09:12:07](https://lobste.rs/s/jcfozl/how_much_do_you_spend_on_ai_assisted_tools) - [How much do you spend on AI-assisted tools?](https://lobste.rs/s/jcfozl/how_much_do_you_spend_on_ai_assisted_tools)
* [2025-07-24, 06:23:36](https://lobste.rs/s/p1fztx/systemd_258_rc1_is_massive_feature) - [systemd 258-rc1 Is A Massive Feature Release With New Tools, More Than 260 Changes](https://www.phoronix.com/news/systemd-258-rc1)
* [2025-07-24, 05:28:00](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss) - [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People&apos;s Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss)
* [2025-07-24, 00:51:11](https://lobste.rs/s/hip584/death_industrial_design_era_dull) - [The Death Of Industrial Design And The Era Of Dull Electronics](https://hackaday.com/2025/07/23/the-death-of-industrial-design-and-the-era-of-dull-electronics/)
* [2025-07-24, 00:39:00](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss) - [SharePoint Vulnerability With 9.8 Severity Rating Under Exploit Across Globe](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss)
* [2025-07-23, 20:45:32](https://lobste.rs/s/yd7mzj/developing_our_position_on_ai) - [Developing our position on AI](https://www.recurse.com/blog/191-developing-our-position-on-ai)
* [2025-07-23, 19:54:00](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss) - [Conversations Between LLMs Could Automate the Creation of Exploits, Study Shows](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss)
* [2025-07-23, 19:34:56](https://news.ycombinator.com/item?id=44663074) - [AMD CEO sees chips from TSMC&apos;s US plant costing 5%-20% more](https://www.bloomberg.com/news/articles/2025-07-23/amd-ceo-su-sees-chips-from-us-tsmc-plant-costing-5-to-20-more)
* [2025-07-23, 18:21:29](https://lobste.rs/s/sk2yop/you_can_now_disable_all_ai_features_zed) - [You Can Now Disable All AI Features in Zed](https://zed.dev/blog/disable-ai-features)
* [2025-07-23, 15:10:00](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss) - [Microsoft Wants to Find Out Why Windows 11 is So Slow](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss)
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
* [2025-07-21, 19:43:18](https://news.ycombinator.com/item?id=44639563) - [Nuclear Reactor SIM by PeteTimesSix](https://petetimessix.itch.io/nuclear-reactors)
* [2025-07-21, 15:42:39](https://news.ycombinator.com/item?id=44636534) - [Modernish – A library for writing programs for POSIX-based shells and utilities](https://github.com/modernish/modernish)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 14:49:28](https://news.ycombinator.com/item?id=44635783) - [Finding Robert Bogucki, the man who disappeared on purpose](https://www.abc.net.au/news/2025-07-06/robert-bogucki-nowhere-man-on-his-43-days-in-the-desert/105234668)
* [2025-07-21, 12:59:56](https://news.ycombinator.com/item?id=44634598) - [Positron – A next-generation data science IDE](https://positron.posit.co/)
* [2025-07-21, 12:57:26](https://news.ycombinator.com/item?id=44634576) - [Why concatenative programming matters (2012)](http://evincarofautumn.blogspot.com/2012/02/why-concatenative-programming-matters.html)
* [2025-07-21, 12:44:59](https://news.ycombinator.com/item?id=44634469) - [Developing with Kiro: Amazon&apos;s New Agentic IDE](https://yehudacohen.substack.com/p/developing-with-kiro-amazons-new)
* [2025-07-21, 12:04:49](https://news.ycombinator.com/item?id=44634208) - [Mwm – The smallest usable X11 window manager](https://github.com/lslvr/mwm)
* [2025-07-21, 11:56:35](https://news.ycombinator.com/item?id=44634143) - [Show HN: tsbro – TypeScript for the Browser, No Build Step](https://github.com/stagas/tsbro)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 08:42:05](https://news.ycombinator.com/item?id=44633024) - [RE#: High performance derivative-based regular expression matching (2024)](https://arxiv.org/abs/2407.20479)
* [2025-07-21, 08:01:27](https://news.ycombinator.com/item?id=44632783) - [The POSIX specification of vi](https://pubs.opengroup.org/onlinepubs/9799919799/utilities/vi.html)
* [2025-07-21, 07:40:01](https://news.ycombinator.com/item?id=44632674) - [I wasted weeks hand optimizing assembly because I benchmarked on random data](https://www.vidarholen.net/contents/blog/?p=1160)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
